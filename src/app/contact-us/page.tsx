"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const ContactUsPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <main id="contact-us-page">
      <Header />
      <section className="section contact-section">
        <div className="container">
          <h1 className="section-title">Contact Us</h1>
          <p className="section-sub-title">Write something in this area.</p>
          <form onSubmit={handleSubmit(onSubmit)} className="row contact-form">
            <div className="col-6 col-medium-12">
              <div>
                <label className="form-label" htmlFor="firstName">
                  First name
                </label>
                <input
                  id="firstName"
                  type="text"
                  {...register("firstName", {
                    required: "This field is required.",
                  })}
                  {...register("name", { required: "This field is required" })}
                  className={`form-input ${errors.name ? "input-error" : ""}`}
                />
                {errors.firstName?.message && (
                  <p className="error">{String(errors.firstName.message)}</p>
                )}
              </div>
              <div>
                <label className="form-label" htmlFor="lastName">
                  Last name
                </label>
                <input
                  id="lastName"
                  type="text"
                  {...register("lastName", {
                    required: "This field is required.",
                  })}
                  {...register("name", { required: "This field is required" })}
                  className={`form-input ${errors.name ? "input-error" : ""}`}
                />
                {errors.lastName?.message && (
                  <p className="error">{String(errors.lastName.message)}</p>
                )}
              </div>
              <div>
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "This field is required.",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  {...register("name", { required: "This field is required" })}
                  className={`form-input ${errors.name ? "input-error" : ""}`}
                />
                {errors.email?.message && (
                  <p className="error">{String(errors.email.message)}</p>
                )}
              </div>
              <div>
                <label className="form-label" htmlFor="nameSubject">
                  Email subject
                </label>
                <input
                  id="nameSubject"
                  type="text"
                  {...register("nameSubject", {
                    required: "This field is required.",
                  })}
                  {...register("name", { required: "This field is required" })}
                  className={`form-input ${errors.name ? "input-error" : ""}`}
                />
                {errors.nameSubject?.message && (
                  <p className="error">{String(errors.nameSubject.message)}</p>
                )}
              </div>
            </div>
            <div className="col-6 col-medium-12">
              <div className="for-wrapper-textarea">
                <label className="form-label label-message" htmlFor="message">
                  Your message
                </label>
                <textarea
                  id="message"
                  {...register("message", {
                    required: "This field is required.",
                  })}
                  {...register("name", { required: "This field is required" })}
                  className={`"form-textarea ${
                    errors.name ? "input-error" : ""
                  }`}
                />
                {errors.message?.message && (
                  <p className="error">{String(errors.message.message)}</p>
                )}
              </div>
            </div>
            <div className="wrapper-checkbox">
              <input
                id="acceptTerms"
                type="checkbox"
                className="form-checkbox"
              />
              <span>
                By checking this box and submitting your information, you are
                granting us permission to email you. You may unsubscribe at any
                time.
              </span>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ContactUsPage;
