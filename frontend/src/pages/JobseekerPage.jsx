import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import JobseekerForm from "../components/JobseekerForm";

function JobseekerPage() {
  return (
    <>
      <Header />
      <main className="py-24">
        <JobseekerForm />
      </main>
      <Footer />
    </>
  );
}

export default JobseekerPage;