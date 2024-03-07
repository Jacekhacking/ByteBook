import pdf1 from './assets/pdf1.pdf';
import pdf2 from './assets/pdf2.pdf';

// eslint-disable-next-line react/prop-types
export function Description({ book }) {
  // eslint-disable-next-line react/prop-types
  const { body, citation, link, pdf } = book;
  return (
    <>
      <div className=" text-xl max-w-xl gap-10 flex justify-center flex-col items-center">
        <p>{body}</p>

        {link ? (
          <a href={link} className=" font-bold hover:text-amber-500">
            {' '}
            See Resource{' '}
          </a>
        ) : (
          ''
        )}

        <p>{citation ? citation : ''}</p>
      </div>
      {pdf ? (
        <iframe
          src={pdf === 'pdf1' ? pdf1 : pdf2}
          width="100%"
          height="1000px"
          title="PDF Viewer"
        />
      ) : (
        ''
      )}
    </>
  );
}
