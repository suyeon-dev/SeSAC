import '../../style/practice/media.scss';

export default function Media() {
  return (
    <main>
      <div>
        <img src={process.env.PUBLIC_URL + '/images/practice1.png'} alt='' />
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + '/images/practice2.png'} alt='' />
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + '/images/practice3.png'} alt='' />
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + '/images/practice4.png'} alt='' />
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + '/images/cat.jpeg'} alt='' />
      </div>
    </main>
  );
}
