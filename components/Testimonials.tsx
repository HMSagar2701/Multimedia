"use client";
import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import avatar1 from "@/public/Images/avatar-1.png";
import avatar2 from "@/public/Images/avatar-2.png";
import avatar3 from "@/public/Images/avatar-3.png";
import avatar4 from "@/public/Images/avatar-4.png";
import avatar5 from "@/public/Images/avatar-5.png";
import avatar6 from "@/public/Images/avatar-6.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'Consultant',
      review: 'Their insights were game-changing. Our revenue grew by 35% within three months!',
      rating: 5,
      avatar: avatar1,
    },
    {
      name: 'Ashley Jain',
      role: 'Creative Director',
      review: 'An amazing team to work with. They truly understand branding.',
      rating: 4,
      avatar: avatar2,
    },
    {
      name: 'Yumi Sato',
      role: 'Marketing Lead',
      review: 'A seamless experience with results-driven strategies that work. Highly recommend their services for any business looking to grow.',
      rating: 5,
      avatar: avatar3,
    },
    {
      name: 'Carlos Ramos',
      role: 'Entrepreneur',
      review: 'Their expertise helped us scale our business quickly and effectively. We saw incredible results within just a few weeks!',
      rating: 5,
      avatar: avatar4,
    },
    {
      name: 'Sophia Lee',
      role: 'Business Strategist',
      review: 'Their team provided actionable insights that transformed our strategy. A truly professional team!',
      rating: 4,
      avatar: avatar5,
    },
    {
      name: 'Daniel Smith',
      role: 'Product Manager',
      review: 'Their expertise in digital marketing is unmatched. Highly recommended!',
      rating: 5,
      avatar: avatar6,
    },
  ];

  const loopedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="bg-gray-100 py-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800 mt-6 mb-4">
          What <span className="text-orange-500">Clients</span> Say!
        </h2>
        <p className="text-gray-600 text-xl">
          See how our digital marketing agency helped clients achieve their goals.
        </p>
      </div>

      <div className="overflow-hidden relative">
        <div
          className="flex gap-6 animate-scroll whitespace-nowrap"
          style={{ animation: 'scroll 20s linear infinite' }}
        >
          {loopedTestimonials.map(({ name, role, review, rating, avatar }, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex-shrink-0 w-72 text-wrap"
            >
              <div className="flex items-center mb-4">
                <img
                  src={avatar.src}
                  alt={`${name}'s avatar`}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{name}</h3>
                  <p className="text-sm text-gray-600">{role}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{review}</p>
              <div className="flex">
                {Array.from({ length: rating }, (_, i) => (
                  <FaStar key={i} />
                ))}
                {Array.from({ length: 5 - rating }, (_, i) => (
                  <FaRegStar key={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 30s linear infinite;
        }
        .break-words {
          word-wrap: break-word;
          word-break: break-word;
          overflow-wrap: break-word;
        }
        .overflow-hidden {
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
