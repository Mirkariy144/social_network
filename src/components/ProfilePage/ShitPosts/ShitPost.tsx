import React from 'react';
import { useFormik } from 'formik';

interface ShitPostProps {
  addPost: (data: { newPost: string }) => void;
}

const ShitPost: React.FC<ShitPostProps> = ({ addPost }) => {
  const formik = useFormik({
    initialValues: {
      newPost: '',
    },
    onSubmit: (values) => {
      addPost(values);
      formik.resetForm();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <textarea
        id="newPost"
        name="newPost"
        onChange={formik.handleChange}
        value={formik.values.newPost}
        placeholder="Добавьте свой новый ShitPost;)"
      />
      <button disabled={!formik.dirty || formik.isSubmitting} type="submit">
        Add post
      </button>
    </form>
  );
};

export default ShitPost;
