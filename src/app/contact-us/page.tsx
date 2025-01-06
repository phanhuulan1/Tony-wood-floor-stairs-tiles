"use client";
import React from "react";
import { useForm } from "react-hook-form";

const ContactUsPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ firstName: string; lastName: string; email: string; nameSubject: string; message: string }>();

  const onSubmit = (data: { firstName: string; lastName: string; email: string; nameSubject: string; message: string }) => {
    console.log('form', data);  
  };

  return (
    <main id="contact-us-page">
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
                  {...register("firstName", {
                    required: "This field is required",
                  })}
                  className={`form-input ${
                    errors.firstName ? "input-error" : ""
                  }`}
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
                  {...register("lastName", {
                    required: "This field is required",
                  })}
                  className={`form-input ${
                    errors.lastName ? "input-error" : ""
                  }`}
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
                  {...register("email", { required: "This field is required" })}
                  className={`form-input ${errors.email ? "input-error" : ""}`}
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
                  {...register("nameSubject", {
                    required: "This field is required",
                  })}
                  className={`form-input ${
                    errors.nameSubject ? "input-error" : ""
                  }`}
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
                  style={{ padding: "10px" }}
                  id="message"
                  {...register("message", {
                    required: "This field is required.",
                  })}
                  {...register("message", {
                    required: "This field is required",
                  })}
                  className={`"form-textarea ${
                    errors.message ? "input-error" : ""
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
    </main>
  );
};
export default ContactUsPage;
