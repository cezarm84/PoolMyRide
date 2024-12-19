import React from "react";
import Footer from "../components/Footer";

const FAQPage: React.FC = () => {
  return (
  <div>
    <main className="container mx-auto p-6">
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-center mb-4">Welcome to Car Pool App</h2>
        <p className="text-center mb-4">
          Join our community to share rides, save money, and reduce your carbon footprint.
        </p>
        <div className="flex justify-center">
          <img
            alt="A group of people carpooling in a car, smiling and enjoying the ride"
            className="rounded-lg shadow-md"
            height="400"
            src="https://storage.googleapis.com/a1aa/image/m8yoEtpInWYiCxxSrED2IhURPcnEtHj2eEkXsTEdG0nYvMeTA.jpg"
            width="600"
          />
        </div>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <img
              alt="Icon representing sign up process"
              className="mx-auto mb-2"
              height="150"
              src="https://storage.googleapis.com/a1aa/image/RKX4XK8Vw2rQMFOcnAQaNMMdMJlB4IOuqDZkhg8n4kwrXGfJA.jpg"
              width="150"
            />
            <h3 className="text-xl font-semibold">Sign Up</h3>
            <p>Create an account to get started.</p>
          </div>
          <div className="text-center">
            <img
              alt="Icon representing search process"
              className="mx-auto mb-2"
              height="150"
              src="https://storage.googleapis.com/a1aa/image/K2f97VK4O8TsQSeuSWBe5tekmKEIxN8Lh0QY57Xm5EQi6lxPB.jpg"
              width="150"
            />
            <h3 className="text-xl font-semibold">Search</h3>
            <p>Find carpool options in your area.</p>
          </div>
          <div className="text-center">
            <img
              alt="Icon representing ride sharing"
              className="mx-auto mb-2"
              height="150"
              src="https://storage.googleapis.com/a1aa/image/ZWc4vYGjsZ5aNJg2399f9CbtFoea3XFWRnNzeQYJEjnE9y4nA.jpg"
              width="150"
            />
            <h3 className="text-xl font-semibold">Share a Ride</h3>
            <p>Join a carpool and enjoy the ride.</p>
          </div>
        </div>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mx-auto mb-2">What is carpooling?</h3>
          <p>
            Carpooling is the sharing of car journeys so that more than one person travels in a car. It reduces each person's travel costs such as fuel expenses, tolls, and the stress of driving.
          </p>
          <img
            alt="Illustration of multiple people sharing a car ride"
            className="rounded-lg shadow-md mx-auto mb-2 mt-2"
            height="400"
            src="https://storage.googleapis.com/a1aa/image/JNf3XB5Ni90YWCajRqB9DGDqPyBLm0AS5CgSG5IaFvKTvMeTA.jpg"
            width="600"
          />
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mx-auto mb-2 ">How do I join a carpool?</h3>
          <p>
            You can join a carpool by signing up on our platform, searching for available carpool options in your area, and contacting the carpool organizer to arrange the details.
          </p>
          <img
            alt="Illustration of a person signing up on a carpool app"
            className="rounded-lg shadow-md mx-auto mb-2 mt-2"
            height="400"
            src="https://storage.googleapis.com/a1aa/image/vM9Stwt7g2psCNcHm8mcffbV2teoKr9Bj775hiRcbdf95lxPB.jpg"
            width="600"
          />
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Is carpooling safe?</h3>
          <p>
            We prioritize safety by verifying the identities of all users and providing a rating system for feedback. However, it is always important to take personal precautions and communicate clearly with your carpool partners.
          </p>
          <img
            alt="Illustration of safety measures in carpooling"
            className="rounded-lg shadow-md mx-auto mb-2 mt-2"
            height="400"
            src="/assets/safe.png"
            width="600"
          />
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">What are the benefits of carpooling?</h3>
          <p>
            Carpooling offers numerous benefits including cost savings, reduced traffic congestion, lower carbon emissions, and the opportunity to meet new people.
          </p>
          <img
            alt="Illustration of the benefits of carpooling"
            className="rounded-lg shadow-md mx-auto mb-2  mt-2"
            height="400"
            src="/assets/miljö.png"
            width="600"
          />
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">How do I organize a carpool?</h3>
          <p>
            To organize a carpool, sign up on our platform, create a carpool listing with details such as departure time, route, and available seats, and wait for interested passengers to contact you.
          </p>
          <img
            alt="Illustration of organizing a carpool"
            className="rounded-lg shadow-md mx-auto mb-2 mt-2"
            height="400"
            src="https://storage.googleapis.com/a1aa/image/IVg3S98vhk7tOt382yuzfHL21psizykcr26e35GpKYprey4nA.jpg"
            width="600"
          />
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">What if my plans change?</h3>
          <p>
            If your plans change, it is important to inform your carpool partners as soon as possible. Our platform allows you to update or cancel your carpool listing to reflect any changes.
          </p>
          <img
            alt="Illustration of updating carpool plans"
            className="rounded-lg shadow-md mx-auto mb-2 mt-2"
            height="400"
            src="/assets/omboka.png"
            width="600"
          />
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Are there any costs involved?</h3>
          <p>
            While joining our platform is free, carpooling costs such as fuel and tolls are typically shared among the passengers. The exact cost-sharing arrangement can be discussed and agreed upon with your carpool partners.
          </p>
          <img
            alt="Illustration of cost-sharing in carpooling"
            className="rounded-lg shadow-md mx-auto mb-2 mt-2"
            height="400"
            src="/assets/cost.png"
            width="600"
          />
        </div>
        
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">How do I rate my carpool experience?</h3>
          <p>
            After completing a carpool journey, you can rate your experience on our platform. This helps maintain a trustworthy community and provides feedback for future users.
          </p>
          <img
            alt="Illustration of rating a carpool experience"
            className="rounded-lg shadow-md mx-auto mb-2 mt-2"
            height="400"
            src="/assets/rating.png"
            width="600"
          />
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">What if I have a complaint?</h3>
          <p>
            If you have a complaint, you can contact our support team through the platform. We take all complaints seriously and will work to resolve any issues promptly.
          </p>
          <img
            alt="Illustration of contacting support for complaints"
            className="rounded-lg shadow-md mx-auto mb-2"
            height="400"
            src="https://storage.googleapis.com/a1aa/image/LG2uVDpaM8byFdenrlNY6hHleRokui3u5IK2LLyWZWR0ey4nA.jpg"
            width="600"
          />
        </div>
      </section>
    </main>
    {/* Footer Component */}
    <Footer className="mt-auto" />
  </div>
  );
};

export default FAQPage;
