import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';

const expiresIn = '90d';

// export const generateToken = (payload: { id: Types.ObjectId }) => {
//   const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn });
//   return token;
// };

export const generateToken = (payload: { id: Types.ObjectId; email: string }) => {
  const token = jwt.sign(
    {
      id: payload.id,
      email: payload.email, 
    },
    process.env.JWT_SECRET!,
    { expiresIn },
  );
  return token;
};
