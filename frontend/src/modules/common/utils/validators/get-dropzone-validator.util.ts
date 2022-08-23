import * as Yup from 'yup';

const acceptFormats: string[] = [
  'image/svg',
  'image/png',
  'image/jpeg',
  'image/gif',
];
const maxSize = 1024 * 1024 * 2;

export const getDropzoneValidator = () =>
  Yup.object().shape({
    files: Yup.mixed()
      .test(
        'fileCount',
        'Please upload only one file',
        (value) => value.length === 1,
      )
      .test(
        'fileFormat',
        `Please upload the file with one of the following formats: ${acceptFormats.join(
          ', ',
        )} `,
        (value) => acceptFormats.includes(value[0].type),
      )
      .test(
        'fileSize',
        'Please upload the file under 2mb',
        (value) => value[0]?.size < maxSize,
      ),
  });
