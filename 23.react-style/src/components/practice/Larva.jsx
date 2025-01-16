import '../../style/practice/larva.scss';

export default function Larva() {
  return (
    <div className='larva'>
      <div className='body body1'>
        <div className='eye eye-white'>
          <div className='eye eye-black'></div>
        </div>
      </div>
      <div className='body body2'></div>
      <div className='body body3'></div>
      <div className='body body4'></div>
      <div className='body body5'></div>

      {/*  /public/images/grass.png 로드 */}
      <img className='grass' src='/images/grass.png' alt='잔디' />
    </div>
  );
}
