import express from 'express';
import User from '../models/User';
import authMiddleware from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/change-password', authMiddleware, async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const userId = req.currentUser?.id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await user.isCorrectPassword(oldPassword);

    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect current password' });
    }

    user.password = newPassword;
    await user.save();

    res.status(200).json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error('Error changing password', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
