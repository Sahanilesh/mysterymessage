/* eslint-disable @typescript-eslint/no-unused-vars */
import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse} from "@/types/ApiResponce";

export async function sendVerificationEmail(
    email: string,
    username: string, 
    verifyCode: string,
): Promise<ApiResponse> {
    try{
        await resend.emails.send({
            from: 'infycarsell@gmail.com',
            to: email,
            subject: 'Mystery Message| Verification code',
            react: VerificationEmail({username, otp: verifyCode}),
            });
        return {
            success: true,
            message: "Verification email sent successfully.",
        }
    }
    catch (emailError) {
        console.error("Error sending verification email:", emailError);
        return {
            success: false,
            message: "Failed to send verification email. Please try again later.",
        };

    }
}