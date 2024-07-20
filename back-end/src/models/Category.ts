import mongoose from 'mongoose';

interface ICategory {
  name: string;
  color: string;
  icon: string;
}

const categorySchema = new mongoose.Schema<ICategory>({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '#000000',
  },
  icon: {
    url: {
      type: String,
      default: 'https://img.icons8.com/?size=100&id=6644&format=png&color=000000',
    },
  },
});

const Category = mongoose.model<ICategory>('Category', categorySchema);

export default Category;