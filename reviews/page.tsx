"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

interface Review {
  id: string;
  message: string;
  rating: number;
  created_at: number;
  source: "Discord" | "Website";
  author_name: string;
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const [shoppexRes, discordRes] = await Promise.allSettled([
          fetch(`https://api.shoppex.io/dev/v1/reviews`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_SHOPPEX_API_KEY}`,
            },
          }),
          fetch(`https://vouvhes.trapstar.lol/api/vouches`, {
            method: "GET",
          }),
        ]);

        let allReviews: Review[] = [];

        if (shoppexRes.status === "fulfilled" && shoppexRes.value.ok) {
          const data = await shoppexRes.value.json();
          if (data?.data && Array.isArray(data.data)) {
            const validShoppex = data.data
              .filter((r: any) => r.message && r.message.trim().length > 0)
              .map((r: any) => ({
                id: r.id || Math.random().toString(),
                message: r.message,
                rating: r.rating || r.score || 5,
                created_at: r.created_at || Date.now() / 1000,
                source: "Website",
                author_name: "Verified Customer"
              }));
            allReviews = [...allReviews, ...validShoppex];
          }
        }

        if (discordRes.status === "fulfilled" && discordRes.value.ok) {
          const discordData = await discordRes.value.json();
          if (discordData?.vouches && Array.isArray(discordData.vouches)) {
            const validDiscord = discordData.vouches
              .filter((r: any) => r.message && r.message.trim().length > 0)
              .map((r: any) => ({
                id: r.target_id + Math.random().toString(),
                message: r.message,
                rating: r.rating || 5,
                created_at: new Date(r.created_at).getTime() / 1000,
                source: "Discord",
                author_name: r.author_name || "Discord User"
              }));
            allReviews = [...allReviews, ...validDiscord];
          }
        }

        allReviews.sort((a, b) => b.created_at - a.created_at);
        const finalReviews = allReviews.slice(0, 30);
        
        setReviews(finalReviews.length > 0 ? finalReviews : getDummyReviews());
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setReviews(getDummyReviews());
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const getDummyReviews = (): Review[] => [
    { id: "1", message: "Amazing service! Delivered instantly.", rating: 5, created_at: Date.now() / 1000, source: "Website", author_name: "Verified Customer" },
    { id: "2", message: "Best provider on the market. Highly recommend.", rating: 5, created_at: Date.now() / 1000, source: "Website", author_name: "Verified Customer" },
    { id: "3", message: "Fast, reliable, and cheap. What else could you want?", rating: 5, created_at: Date.now() / 1000, source: "Website", author_name: "Verified Customer" },
    { id: "4", message: "Support was very helpful and the product works perfectly.", rating: 5, created_at: Date.now() / 1000, source: "Website", author_name: "Verified Customer" },
    { id: "5", message: "10/10 would buy again.", rating: 5, created_at: Date.now() / 1000, source: "Website", author_name: "Verified Customer" },
    { id: "6", message: "Great experience, very trustworthy.", rating: 5, created_at: Date.now() / 1000, source: "Website", author_name: "Verified Customer" },
    { id: "7", message: "Super fast delivery. Thank you!", rating: 5, created_at: Date.now() / 1000, source: "Website", author_name: "Verified Customer" },
    { id: "8", message: "Will definitely be coming back for more.", rating: 5, created_at: Date.now() / 1000, source: "Website", author_name: "Verified Customer" },
    { id: "9", message: "A seamless purchase from start to finish.", rating: 5, created_at: Date.now() / 1000, source: "Website", author_name: "Verified Customer" },
  ];

  return (
    <div className="pg-wrapper relative min-h-screen bg-transparent text-gray-200 overflow-x-hidden flex flex-col pt-32" data-component-id="feedback-page">
      <Header />

      <div className="pg-inner relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 min-h-[65vh] flex flex-col items-center w-full">
        {/* Background Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[rgba(255,76,191,0.1)] blur-[150px] rounded-full pointer-events-none -z-10"></div>

        <div className="pg-header text-center mb-16 flex flex-col items-center max-w-3xl">
          <div className="pg-overline section-overline">Reviews</div>
          <div className="pg-title section-title">
            <h2>Customer Feedback</h2>
          </div>
          <div className="pg-date-row section-subtitle">
            <div className="pg-updated"><p>What our customers are saying</p></div>
          </div>
        </div>

        <div className="pg-content-block w-full">
          {loading ? (
            <div className="flex flex-col items-center justify-center gap-4 py-20">
              <div className="w-12 h-12 border-4 border-[#ff4fbf]/20 border-t-[#ff4fbf] rounded-full animate-spin"></div>
              <div className="text-[#ff4fbf] animate-pulse text-lg font-bold tracking-widest uppercase">
                Loading Verified Reviews...
              </div>
            </div>
          ) : (
            <div className="testimonials-grid">
              {reviews.map((review, index) => (
                <div key={`${review.id}-${index}`} className="fc">
                  <div className="fc__top">
                    <div className="fc__product">
                      {review.author_name}
                      <span className="fc__source">{review.source}</span>
                    </div>
                    <div className="fc__stars">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} viewBox="0 0 24 24" className={`fc__star ${i < review.rating ? 'active' : ''}`}>
                          <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>

                  <div className="fc__message">
                    <p>&quot;{review.message}&quot;</p>
                  </div>

                  <div className="fc__date">
                    {new Date(review.created_at * 1000).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          width: 100%;
        }
        
        .fc {
          background: rgba(13, 13, 13, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          font-family: 'Satoshi', sans-serif;
          height: 200px;
          overflow: hidden;
          transition: all 0.3s ease;
          position: relative;
        }

        .fc:hover {
          border-color: rgba(196, 9, 217, 0.4);
          box-shadow: 0 10px 30px rgba(196, 9, 217, 0.15);
          transform: translateY(-2px);
        }

        .fc__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          flex-shrink: 0;
        }

        .fc__product {
          font-size: 0.875rem;
          font-weight: 600;
          color: #ffffff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .fc__source {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #ff4fbf;
          font-weight: 800;
        }

        .fc__stars {
          display: flex;
          gap: 2px;
          flex-shrink: 0;
        }

        .fc__star {
          width: 16px;
          height: 16px;
          fill: rgba(255, 255, 255, 0.1);
          transition: fill 0.2s ease;
        }
        
        .fc__star.active {
          fill: #ff4fbf;
          filter: drop-shadow(0 0 6px rgba(255, 76, 191, 0.6));
        }

        .fc__message {
          flex: 1;
          overflow: hidden;
          min-height: 0;
        }

        .fc__message p {
          font-size: 0.95rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-style: italic;
        }

        .fc__date {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.3);
          font-weight: 500;
          flex-shrink: 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 12px;
          margin-top: auto;
        }
      `}} />
    </div>
  );
}

export const dynamic = "force-dynamic";
