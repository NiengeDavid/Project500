"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

// Schema for form validation using Zod
const formSchema = z.object({
  schoolName: z.string().min(1, { message: "School Name is required" }),
  schoolAddress: z.string().min(1, { message: "School Address is required" }),
  contactPersonName: z
    .string()
    .min(1, { message: "Contact Person's Name is required" }),
  contactEmail: z
    .string()
    .email({ message: "Please provide a valid email address" }),
  contactPhone: z
    .string()
    .min(10, { message: "Please provide a valid phone number" }),
  numberOfStudents: z
    .string({ invalid_type_error: "Number of students must be a number" })
    .min(1, { message: "Number of students is required" }),
  preferredDate: z
    .string()
    .min(1, { message: "Preferred Date/Time is required" }),
  dyslexiaImportance: z
    .string()
    .min(1, { message: "Please explain why dyslexia awareness is important" }),
  numberOfBooks: z
    .string({ invalid_type_error: "Number of books must be a number" })
    .min(1, { message: "Please specify the number of books you would like" }),
  additionalInfo: z.string().optional(),
});

const RegistrationForm: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      schoolName: "",
      schoolAddress: "",
      contactPersonName: "",
      contactEmail: "",
      contactPhone: "",
      numberOfStudents: "",
      preferredDate: "",
      dyslexiaImportance: "",
      numberOfBooks: "",
      additionalInfo: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setLoading(true);

    // Define the email contents
    const userEmailContent = {
      to: data.contactEmail,
      subject: `Enrollment Confirmation - Welcome to Dyslexia Project500!`,
      htmlContent: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Enrollment Confirmation</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              color: #333;
              margin: 0;
              padding: 0;
              background-color: #f6d4c4;
            }
            .container {
              width: 100%;
              max-width: 600px;
              margin: 0 auto;
              background-color: #f6d4c4;
              padding: 20px;
              border-radius: 10px;
              box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
            }
            .header {
              text-align: center;
              margin-bottom: 20px;
            }
            .header h1 {
              font-size: 24px;
              margin: 0;
              background-color: #001327;
              padding: 20px;
              color: #fff;
            }
            .content {
              font-size: 16px;
              line-height: 1.5;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              font-size: 14px;
              color: #fff;
              background-color: #001327;
              padding: 20px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 class="head">Welcome to the Dyslexia project500, ${data.schoolName}!</h1>
            </div>
            <div class="content">
              <p>Thank you for your submission. We're thrilled to have you join this project and our community.</p>
              <p>Here are the details of your enrollment:</p>
              <ul>
                <li><strong>School Name:</strong> ${data.schoolName}</li>
                <li><strong>School Address:</strong> ${data.schoolAddress}</li>
                <li><strong>Contact Person's Name:</strong> ${data.contactPersonName}</li>
                <li><strong>Contact person's Email:</strong> ${data.contactEmail}</li>
                <li><strong>Contact person's Number:</strong> ${data.contactPhone}</li>
                <li><strong>Number of Prrimary school students:</strong> ${data.numberOfStudents}</li>
                <li><strong>Preferred Date/Time for visit:</strong> ${data.preferredDate}</li>
                <li><strong>Why Dyslexia Awareness is important:</strong> ${data.dyslexiaImportance}</li>
                <li><strong>Additional Information:</strong> ${data.additionalInfo}</li>
              </ul>
              <p>We're excited to start this journey with you. If you have any questions, feel free to reach out to us.</p>
            </div>
            <div class="footer">
              <p>Best regards,<br>Dyslexia Project500 Team</p>
            </div>
          </div>
        </body>
        </html>
      `,
      textContent: `
        Welcome to the Dyslexia project500, ${data.schoolName}!

        Thank you for your submission. We're thrilled to have you join this project and our community.

        Here are the details of your enrollment:

        - School Name: ${data.schoolName}
        - School Address: ${data.schoolAddress}
        - Contact Person's Name: ${data.contactPersonName}
        - Contact Person's Email: ${data.contactEmail}
        - Contact Person's Phone: ${data.contactPhone}
        - Number of Primary School Students: ${data.numberOfStudents}
        - Preferred Date/Time for the Visit: ${data.preferredDate}
        - Why Dyslexia Awareness is Important: ${data.dyslexiaImportance}
        - Additional Information: ${data.additionalInfo}

        We're excited to start this journey with you. If you have any questions, feel free to reach out to us.

        Best regards,
        Dyslexia Project500 Team

      `,
    };

    const clientEmailContent = {
      to: "davidnienge@gmail.com", //  dyslexiaprojectafrica@gmail.com Replace with the actual client's email
      subject: `New School Enrollment Submission - ${data.schoolName}`,
      htmlContent: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Enrollment Submission</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              color: #333;
              margin: 0;
              padding: 0;
              background-color: #f6d4c4;
            }
            .container {
              width: 100%;
              max-width: 600px;
              margin: 0 auto;
              background-color: #f6d4c4;
              padding: 20px;
              border-radius: 10px;
              box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
            }
            .header {
              text-align: center;
              margin-bottom: 20px;
            }
            .header h1 {
              font-size: 24px;
              margin: 0;
              background-color: #001327;
              padding: 20px;
              color: #fff;
            }
            .content {
              font-size: 16px;
              line-height: 1.5;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              font-size: 14px;
              color: #fff;
              background-color: #001327;
              padding: 20px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New School Enrollment Submission</h1>
            </div>
            <div class="content">
              <p>A new project500 school enrollment form has been submitted. Here are the details:</p>
              <ul>
                <li><strong>School Name:</strong> ${data.schoolName}</li>
                <li><strong>School Address:</strong> ${data.schoolAddress}</li>
                <li><strong>Contact Person's Name:</strong> ${data.contactPersonName}</li>
                <li><strong>Contact person's Email:</strong> ${data.contactEmail}</li>
                <li><strong>Contact person's Number:</strong> ${data.contactPhone}</li>
                <li><strong>Number of Prrimary school students:</strong> ${data.numberOfStudents}</li>
                <li><strong>Preferred Date/Time for visit:</strong> ${data.preferredDate}</li>
                <li><strong>Why Dyslexia Awareness is important:</strong> ${data.dyslexiaImportance}</li>
                <li><strong>Additional Information:</strong> ${data.additionalInfo}</li>
              </ul>
              <p>Please review the details and proceed with the necessary actions.</p>
            </div>
            <div class="footer">
              <p>Thank you,<br>Support/p>
            </div>
          </div>
        </body>
        </html>
      `,
      textContent: `
        New School Enrollment Submission
    
        A new project500 school enrollment form has been submitted. Here are the details:
    
        - School Name: ${data.schoolName}
        - School Address: ${data.schoolAddress}
        - Contact Person's Name: ${data.contactPersonName}
        - Contact Person's Email: ${data.contactEmail}
        - Contact Person's Phone: ${data.contactPhone}
        - Number of Primary School Students: ${data.numberOfStudents}
        - Preferred Date/Time for the Visit: ${data.preferredDate}
        - Why Dyslexia Awareness is Important: ${data.dyslexiaImportance}
        - Additional Information: ${data.additionalInfo}
    
        Please review the details and proceed with the necessary actions.
    
        Thank you,
        Support
      `,
    };

    try {
      const clientResponse = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(clientEmailContent),
      });

      if (clientResponse.ok) {
        // If client email is sent successfully, send the user email
        const userResponse = await fetch("/api/sendMail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userEmailContent),
        });

        if (userResponse.ok) {
          // Form reset
          form.reset();
          // Display a success toast notification
          toast({
            variant: "success",
            title: "Form Submitted",
            description: "Thank you for enrolling your school!",
          });
          setLoading(false);
        } else {
          toast({
            variant: "destructive",
            title: "Error!",
            description: "Failed to send that request. Please check your connection and try again",
          });
          setLoading(false);
        }
      } else {
        toast({
          variant: "destructive",
          title: "Error!",
          description: "Failed to send enrollment details.",
        });
        setLoading(false);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error!",
        description: "An error occurred while processing your request.",
      });
      setLoading(false);
    }

    // console.log("Form Data Submitted: ", data);
    // toast({
    //   title: "Form Submitted Successfully",
    //   description: "Thank you for registering.",
    //   variant: "success",
    // });
  }

  return (
    <section className="bg-[#f1f7f7] p-6 py-28 md:p-12 md:py-48">
      <div className="max-w-2xl mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* School Name */}
            <FormField
              control={form.control}
              name="schoolName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>School Name</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-transparent border border-gray-800"
                      placeholder="Enter the official name of your school"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* School Address */}
            <FormField
              control={form.control}
              name="schoolAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>School Address</FormLabel>
                  <FormControl>
                    <Textarea
                      className="bg-transparent border border-gray-800"
                      placeholder="Provide the full address of the school including the state and country"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Contact Person Name */}
            <FormField
              control={form.control}
              name="contactPersonName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Person's Name</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-transparent border border-gray-800"
                      placeholder="Enter the name of the person we should communicate with"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Contact Email */}
            <FormField
              control={form.control}
              name="contactEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Person's Email</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-transparent border border-gray-800"
                      placeholder="Provide a valid school email for communication"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Contact Phone */}
            <FormField
              control={form.control}
              name="contactPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Person's Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-transparent border border-gray-800"
                      placeholder="Provide a phone number we can use to reach you"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Number of Students */}
            <FormField
              control={form.control}
              name="numberOfStudents"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Primary School Students</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-transparent border border-gray-800"
                      type="number"
                      placeholder="Approximate number of students"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Preferred Date */}
            <FormField
              control={form.control}
              name="preferredDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Date/Time for the Visit</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-transparent border border-gray-800"
                      placeholder="Suggest a preferred date or timeframe for the visit"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Dyslexia Importance */}
            <FormField
              control={form.control}
              name="dyslexiaImportance"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Why is Dyslexia Awareness important to your school?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="bg-transparent border border-gray-800"
                      placeholder="Briefly explain why your school is interested"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Number of Books */}
            <FormField
              control={form.control}
              name="numberOfBooks"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Number of Books (Dyslexia Superpower Unveiled)
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="bg-transparent border border-gray-800"
                      type="number"
                      placeholder="Enter the number of books your school would like"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Additional Information (Optional) */}
            <FormField
              control={form.control}
              name="additionalInfo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Any Additional Information (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      className="bg-transparent border border-gray-800"
                      placeholder="Any other details or special requests"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-40">
              {loading ? "Submiting..." : "Submit Registration"}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default RegistrationForm;
