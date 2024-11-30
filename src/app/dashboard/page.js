"use client";

import NavBar from "@/components/nav";
import { useState } from "react";
import DashboardCard from "@/components/dashboard-card";

export default function Dashboard() {

  const [adoptionForms, setAdoptionForms] = useState([]);
  const [submittedForms, setSubmittedForms] = useState([]);

  // Temporary, not sure how we will implement this yet
  // Change this to "customer" if you want to render the other dashboard
  const [userRole, setUserRole] = useState("admin");

  return (
    <main>
      <NavBar currentPage="Dashboard" />
      <div className="relative bg-cover bg-center min-h-screen">
        {userRole === "admin" ? (
          <>
            {/* admin dashboard */}
            <div className="flex flex-wrap justify-center gap-8 px-8 pt-28">
              <DashboardCard
                title="Add Pet"
                icon="/assets/dashboard/plus.png"
                url=""
              />
              <DashboardCard
                title="Edit Pet"
                icon="/assets/dashboard/pencil-simple.png"
                url=""
              />
              <DashboardCard
                title="Delete Pet"
                icon="/assets/dashboard/minus.png"
                url=""
              />
            </div>
            <div className="relative bg-cover bg-center px-8 py-16">
              <h2 className="text-2xl font-bold mt-8 text-black">
                Submitted Adoption Forms
              </h2>
              <div className="text-black mt-4">
                {adoptionForms.length > 0 ? (
                  adoptionForms.map((form) => (
                    <div key={form.id} className="border-b py-2">
                      <p>
                        {form.name} - {form.status}
                      </p>
                    </div>
                  ))
                ) : (
                  <p>No forms submitted yet.</p>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* client dashboard */}
            <div className="relative bg-cover bg-center px-8 py-16">
              <h2 className="text-2xl font-bold mt-8 text-black">
                Your Adoption Forms
              </h2>
              <div className="text-black mt-4">
                {submittedForms.length > 0 ? (
                  submittedForms.map((form) => (
                    <div key={form.id} className="border-b py-2">
                      <p>
                        {form.name} - {form.status}
                      </p>
                    </div>
                  ))
                ) : (
                  <p>You haven't submitted any adoption forms yet.</p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
