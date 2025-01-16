import style from '../style/style.module.css';
import classNames from 'classnames';
import Names from 'classnames/bind';

export default function ModuleCSS() {
  // classnmaes 기능 써보기 (점으로 접근하기 싫을 때)
  const setting = Names.bind(style);

  return (
    <div className={style.container}>
      <h4>module.css 적용</h4>
      <div className={style.box2}>
        <div>안녕하세용</div>
      </div>
      <br />

      <div className={`${style.first} ${style.second}`}>
        클래스를 여러개 지정하는 법1 (템플릿 리터럴)
      </div>
      {/* join 배열 -> 문자열 
      > [1,2,3,4,5].join('-') -> 1-2-3-4-5
      > ['first', 'second'].join(' ) -> 'first second'
      split 문자열 -> 배열
      */}
      <div className={[style.first, style.second].join(' ')}>
        클래스를 여러개 지정하는 2 (배열과 Join 이용)
      </div>
      <div className={classNames(style.first, style.second)}>
        클래스를 여러개 지정하는 법3 (classNames 모듈 설치)
      </div>

      <div className={setting('first', 'second')}>
        classnames 모듈 사용 더 해보기 (점 접근이 싫을 때)
      </div>
    </div>
  );
}
