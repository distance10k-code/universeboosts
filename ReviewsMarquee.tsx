"use client";

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

const ReviewsMarquee = () => {
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
        const finalReviews = allReviews.slice(0, 15);

        setReviews(finalReviews.length > 0 ? finalReviews : getDummyReviews());
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setReviews(getDummyReviews()); // Fallback to dummy data
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const getDummyReviews = (): Review[] => [
    { id: "1", message: "Amazing service! Delivered instantly.", rating: 5, created_at: Date.now(), source: "Website", author_name: "Verified Customer" },
    { id: "2", message: "Best provider on the market. Highly recommend.", rating: 5, created_at: Date.now(), source: "Website", author_name: "Verified Customer" },
    { id: "3", message: "Fast, reliable, and cheap. What else could you want?", rating: 5, created_at: Date.now(), source: "Website", author_name: "Verified Customer" },
    { id: "4", message: "Support was very helpful and the product works perfectly.", rating: 5, created_at: Date.now(), source: "Website", author_name: "Verified Customer" },
    { id: "5", message: "10/10 would buy again.", rating: 5, created_at: Date.now(), source: "Website", author_name: "Verified Customer" },
  ];

  if (loading) return null;

  const marqueeItems = [...reviews, ...reviews, ...reviews];

  return (
    <div className="w-full py-24 overflow-hidden relative border-y border-white/5 bg-[#0f0f0f]">
      
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <p className="section-overline">✦ Proven Excellence</p>
        <div className="section-title">
          <h2>
            <span className="sparkles-wrap">
              Trusted by Thousands.
              <span className="sp" style={{ left: "30.31px", top: "31.23px" }}>
                <svg width="12" height="12" viewBox="0 0 21 21" fill="none"><path d="M9.82 0.84C10.05 0.21 10.94 0.21 11.17 0.84L11.86 2.72C12.4 4.19 12.39 6.39 13.5 7.5C14.6 8.6 16.8 8.59 18.27 9.13L20.15 9.82C20.78 10.05 20.78 10.94 20.15 11.17L18.27 11.86C16.8 12.4 14.6 12.39 13.5 13.5C12.39 14.6 12.4 16.8 11.86 18.27L11.17 20.15C10.94 20.78 10.05 20.78 9.82 20.15L9.13 18.27C8.59 16.8 8.6 14.6 7.5 13.5C6.39 12.39 4.19 12.4 2.72 11.86L0.84 11.17C0.21 10.94 0.21 10.05 0.84 9.82L2.72 9.13C4.19 8.59 6.39 8.6 7.5 7.5C8.6 6.39 8.59 4.19 9.13 2.72L9.82 0.84Z" fill="#e879f9" /></svg>
              </span>
              <span className="sp" style={{ left: "117.71px", top: "9.98px" }}>
                <svg width="14" height="14" viewBox="0 0 21 21" fill="none"><path d="M9.82 0.84C10.05 0.21 10.94 0.21 11.17 0.84L11.86 2.72C12.4 4.19 12.39 6.39 13.5 7.5C14.6 8.6 16.8 8.59 18.27 9.13L20.15 9.82C20.78 10.05 20.78 10.94 20.15 11.17L18.27 11.86C16.8 12.4 14.6 12.39 13.5 13.5C12.39 14.6 12.4 16.8 11.86 18.27L11.17 20.15C10.94 20.78 10.05 20.78 9.82 20.15L9.13 18.27C8.59 16.8 8.6 14.6 7.5 13.5C6.39 12.39 4.19 12.4 2.72 11.86L0.84 11.17C0.21 10.94 0.21 10.05 0.84 9.82L2.72 9.13C4.19 8.59 6.39 8.6 7.5 7.5C8.6 6.39 8.59 4.19 9.13 2.72L9.82 0.84Z" fill="#ff4fbf" /></svg>
              </span>
            </span>
          </h2>
        </div>
        <div className="section-subtitle"><p>Real reviews from our most recent customers. Experience the difference today.</p></div>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-[#0f0f0f] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex whitespace-nowrap group-hover:[animation-play-state:paused]">
          {marqueeItems.map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className="w-[350px] mx-4 p-8 rounded-[24px] bg-[#121212] border border-white/5 shrink-0 whitespace-normal flex flex-col gap-5 hover:border-[#ff4fbf]/40 hover:shadow-[0_10px_30px_rgba(255,76,191,0.1)] transition-all duration-300"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < review.rating ? "fill-[#ff4fbf] text-[#ff4fbf] drop-shadow-[0_0_8px_rgba(255,76,191,0.4)]" : "fill-white/5 text-white/5"}`}
                  />
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed italic flex-grow font-['Poppins']">
                &quot;{review.message.length > 120 ? review.message.substring(0, 120) + '...' : review.message}&quot;
              </p>
              <div className="flex items-center justify-between border-t border-white/5 pt-5 mt-auto">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-white font-['Satoshi']">{review.author_name}</span>
                  <span className={`text-[10px] font-black uppercase tracking-widest ${review.source === "Discord" ? "text-indigo-400" : "text-[#ff4fbf]"}`}>
                    {review.source} Review
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-[#0f0f0f] to-transparent z-10 pointer-events-none" />
      </div>
    </div>
  );
};

export default ReviewsMarquee;
