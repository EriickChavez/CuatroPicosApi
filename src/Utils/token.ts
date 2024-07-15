import jwt from "jsonwebtoken";
import { ENV } from "@/Config/Env";

// Function to generate JWT token
const generateJWTToken = (userId: string): string => {
  const secretKey = ENV.secretKey;
  const expiresIn = "1h";

  const token = jwt.sign({ userId }, secretKey, { expiresIn });

  return token;
};

export default generateJWTToken;
