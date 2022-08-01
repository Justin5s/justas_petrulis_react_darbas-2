import * as Yup from 'yup';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import { useAuthCtx } from '../../store/authContext';
import css from './AddForm.module.css';
import Button from '../UI/Button/Button';
import { baseUrl, myFetchAuth } from '../../utils';

const initValues = {
  title: '',
  description: '',
};

function AddForm() {
  const history = useHistory();
  const { token } = useAuthCtx();
  const formik = useFormik({
    initialValues: initValues,
    validationSchema: Yup.object({
      title: Yup.string()
        .min(5, 'At least 5 characters')
        .max(30, 'Maximum title length 30')
        .required(),
      description: Yup.string()
        .min(5, 'At least 5 characters')
        .max(50, 'Maximum description length 50')
        .required(),
    }),

    onSubmit: async (values) => {
      const addResult = await myFetchAuth(`${baseUrl}v1/content/skills`, 'POST', token, values);
      console.log('addResult ===', addResult);

      if (addResult.msg === 'Added new skill') {
        toast.success('New skill was added.');
        history.replace('/home');
      }
      console.log('addResult ===', addResult);
      if (addResult.err === 'Incorrect data sent') {
        toast.error('Error while adding skill. Please try again.');
        return;
      }
      console.log('submiting values ===', values);
    },
  });

  return (
    <div className={css['form-container']}>
      <h2 className={css['form-title']}>Add skills</h2>

      <form onSubmit={formik.handleSubmit} className={css['add-form']}>
        <div className={css['form-group']}>
          <label htmlFor='title'>Title</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            type='text'
            className={formik.touched.title && formik.errors.title ? css['invalid'] : ''}
            id='title'
            name='title'
          />
          {formik.touched.title && formik.errors.title && (
            <p className={css['error-msg']}>{formik.errors.title}</p>
          )}
        </div>
        <div className={css['form-group']}>
          <label htmlFor='description'>Description</label>
          <textarea
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            type='description'
            className={
              formik.touched.description && formik.errors.description ? css['invalid'] : ''
            }
            id='description'
            name='description'
          ></textarea>
          {formik.touched.description && formik.errors.description && (
            <p className={css['error-msg']}>{formik.errors.description}</p>
          )}
        </div>
        <Button submit primary>
          Add
        </Button>
      </form>
    </div>
  );
}

export default AddForm;
