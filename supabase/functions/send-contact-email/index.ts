
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
  selectedProduct?: {
    id: string;
    name: string;
  };
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message, selectedProduct }: ContactEmailRequest = await req.json();

    // Send email to business owner
    const businessEmailResponse = await resend.emails.send({
      from: "Sihana's Cake <onboarding@resend.dev>",
      to: ["hamzaademi460@gmail.com"],
      subject: `New Order Inquiry${selectedProduct ? ` - ${selectedProduct.name}` : ''}`,
      html: `
        <h2>New Order Inquiry</h2>
        <p><strong>Customer:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${selectedProduct ? `<p><strong>Product of Interest:</strong> ${selectedProduct.name}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        
        <hr>
        <p style="color: #666; font-size: 12px;">
          This email was sent from the Sihana's Cake website contact form.
        </p>
      `,
    });

    // Send confirmation email to customer
    const customerEmailResponse = await resend.emails.send({
      from: "Sihana's Cake <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for your inquiry!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #E58FB8;">Thank you for contacting Sihana's Cake!</h1>
          <p>Dear ${name},</p>
          <p>We have received your inquiry and will get back to you as soon as possible, usually within 24 hours.</p>
          
          ${selectedProduct ? `<p>We see you're interested in our <strong>${selectedProduct.name}</strong>. We can't wait to help make your special occasion even sweeter!</p>` : ''}
          
          <p>Here's a summary of your inquiry:</p>
          <div style="background-color: #FFF8F0; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Message:</strong> ${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <p>In the meantime, feel free to browse our gallery or check out our menu for more delicious options!</p>
          
          <p>Best regards,<br>
          The Sihana's Cake Team</p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 12px; text-align: center;">
            This is an automated confirmation email. Please do not reply to this email.
          </p>
        </div>
      `,
    });

    console.log("Emails sent successfully:", { businessEmailResponse, customerEmailResponse });

    return new Response(JSON.stringify({ 
      success: true,
      message: "Emails sent successfully"
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
