import { useState, useEffect } from "react";
import { auth } from "../../Config/firebase-config";
import { PiWarningCircleFill } from "react-icons/pi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Button } from "../../atoms/Button/Button";
import EmailVerificationStyle from "./EmailVerificationStyle";

const EmailVerification = () => {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(auth);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  
  const handleSendVerificationEmail = () => {
    if (user) {
      user.currentUser.sendEmailVerification().then(() => {
          console.log("Verification email sent successfully");
          alert("Email sent")
        })
        .catch((error: string) => {
          console.error("Error sending verification email", error);
        });
    }
  };


  return (
    <EmailVerificationStyle>
      <div>
        {!user?.emailVerified ? (
          <div className="email__status">
            {" "}
            <span>Email is not verified</span>{" "}
            <PiWarningCircleFill size={15} color={"orange"} />{" "}
            <Button
              classname="send__verification__button"
              value="Send Verification Email"
              onclick={handleSendVerificationEmail}
            />
          </div>
        ) : (
          <div className="email__status">
            <span>Email verified</span>{" "}
            <BsFillCheckCircleFill size={15} color={"green"} />
          </div>
        )}
      </div>
    </EmailVerificationStyle>
  );
};

export default EmailVerification;
