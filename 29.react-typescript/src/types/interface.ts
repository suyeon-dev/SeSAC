export interface TodoItemInterface {
  id: number;
  text: string;
  done: boolean;
}

// PostList 과제
export interface PostItemInterface {
  id: number;
  title: string;
  body: string;
}

// 맛집 실습
export interface MatzipInterface {
  idx?: number;
  imgSrc: string;
  title: string;
  desc: string;
}
