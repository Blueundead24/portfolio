import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Reyhaan S</h1>
          <p className="text-lg text-gray-600">Data Engineer | Building Scalable Data Systems</p>
          <div className="flex justify-center gap-4 mt-4">
            <Button>LinkedIn</Button>
            <Button variant="outline">GitHub</Button>
          </div>
        </div>

        {/* About Section */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-2xl font-semibold">About Me</h2>
            <p>
              I am Reyhaan, a Data Engineer focused on building reliable, scalable data pipelines and analytics systems. I enjoy working with data infrastructure, automation, and transforming raw data into meaningful insights that drive decisions.
            </p>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-2xl font-semibold">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "SQL",
                "Apache Spark",
                "Airflow",
                "ETL Pipelines",
                "Data Warehousing",
                "BigQuery",
                "AWS / GCP",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-200 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Projects Section */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Real-Time ETL Pipeline</strong> – Built an automated data pipeline using Airflow and Spark to process and load large datasets into a data warehouse.
              </li>
              <li>
                <strong>Analytics Dashboard</strong> – Designed a data warehouse and SQL-based reporting system to deliver business insights from raw transactional data.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6 space-y-3 text-center">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p>Email: reyhaan@example.com</p>
            <p>Location: Chennai, India</p>
            <Button className="mt-2">Get In Touch</Button>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Reyhaan. All rights reserved.
        </div>
      </div>
    </div>
  );
}
