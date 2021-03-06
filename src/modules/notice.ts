import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction, ActionCreator } from 'redux';
import { noticeTableStaticData } from '../static/notice';

const SET_SELECTED_TAG = 'SET_SELECTED_TAG' as const;

export interface PostsTable {
  date: string;
  title: string;
  views: number;
  contents: string;
}

export interface RulesTable {
  ruleTitle: string;
  rulePoint: number;
}

export interface VolunteerTable {
  volunteerGrade: string;
  volunteerTitle: string;
  volunteerPoint: string;
}

export const setSelectedTag = (
  selectedTag: string,
  tableType: string,
  tableItems: Array<PostsTable | RulesTable | VolunteerTable>,
) => ({
  type: SET_SELECTED_TAG,
  payload: { selectedTag, tableType, tableItems },
});

export type NoticeAction = ReturnType<typeof setSelectedTag>;

export interface NoticeState {
  selectedTag: string;
  tableItems: Array<PostsTable | RulesTable | VolunteerTable>;
  tableType: string;
}

const initalState: NoticeState = {
  selectedTag: '안내사항',
  tableItems: [
    {
      date: '2019-07-28',
      title: '4월 기숙사 캠페인 안내',
      views: 10,
      contents:
        '욕설 혹은 폭언, 부적절한 언어 사용을 지양하고 바른 말을 쓰도록 합니다.\n4월 한달 동안 바른 말을 사용하려 노력한 학생으로 추천받을 시 상점 부여하며, 많은 학생들이 추천한 학생들에게는 상품권을 수여합니다.\n- 2명 이상(본인 추천 가능)에게 추천 받은 학생 : 상점 2점\n- 가장 많은 학생들에게 추천 받은 학생 학년별 5명 : 상품권 1만원',
    },
    {
      date: '2019-07-28',
      title: '4월 기숙사 캠페인 안내',
      views: 10,
      contents:
        '욕설 혹은 폭언, 부적절한 언어 사용을 지양하고 바른 말을 쓰도록 합니다.\n4월 한달 동안 바른 말을 사용하려 노력한 학생으로 추천받을 시 상점 부여하며, 많은 학생들이 추천한 학생들에게는 상품권을 수여합니다.\n- 2명 이상(본인 추천 가능)에게 추천 받은 학생 : 상점 2점\n- 가장 많은 학생들에게 추천 받은 학생 학년별 5명 : 상품권 1만원',
    },
    {
      date: '2019-07-28',
      title: '4월 기숙사 캠페인 안내',
      views: 10,
      contents:
        '욕설 혹은 폭언, 부적절한 언어 사용을 지양하고 바른 말을 쓰도록 합니다.\n4월 한달 동안 바른 말을 사용하려 노력한 학생으로 추천받을 시 상점 부여하며, 많은 학생들이 추천한 학생들에게는 상품권을 수여합니다.\n- 2명 이상(본인 추천 가능)에게 추천 받은 학생 : 상점 2점\n- 가장 많은 학생들에게 추천 받은 학생 학년별 5명 : 상품권 1만원',
    },
  ],
  tableType: 'posts',
};

export const setSelectedTagThunk: ActionCreator<
  ThunkAction<NoticeAction, NoticeState, void, any>
> = (
  selectedTag: string,
  tableType: string,
  staticTableIndex: number,
) => dispatch => {
  if (tableType !== 'posts') {
    return dispatch(
      setSelectedTag(
        selectedTag,
        tableType,
        noticeTableStaticData[staticTableIndex],
      ),
    );
  }
  const postsList = [
    {
      date: '2019-07-28',
      title: '4월 기숙사 캠페인 안내',
      views: 10,
      contents:
        '욕설 혹은 폭언, 부적절한 언어 사용을 지양하고 바른 말을 쓰도록 합니다.\n4월 한달 동안 바른 말을 사용하려 노력한 학생으로 추천받을 시 상점 부여하며, 많은 학생들이 추천한 학생들에게는 상품권을 수여합니다.\n- 2명 이상(본인 추천 가능)에게 추천 받은 학생 : 상점 2점\n- 가장 많은 학생들에게 추천 받은 학생 학년별 5명 : 상품권 1만원',
    },
    {
      date: '2019-07-28',
      title: '4월 기숙사 캠페인 안내',
      views: 10,
      contents:
        '욕설 혹은 폭언, 부적절한 언어 사용을 지양하고 바른 말을 쓰도록 합니다.\n4월 한달 동안 바른 말을 사용하려 노력한 학생으로 추천받을 시 상점 부여하며, 많은 학생들이 추천한 학생들에게는 상품권을 수여합니다.\n- 2명 이상(본인 추천 가능)에게 추천 받은 학생 : 상점 2점\n- 가장 많은 학생들에게 추천 받은 학생 학년별 5명 : 상품권 1만원',
    },
    {
      date: '2019-07-28',
      title: '4월 기숙사 캠페인 안내',
      views: 10,
      contents:
        '욕설 혹은 폭언, 부적절한 언어 사용을 지양하고 바른 말을 쓰도록 합니다.\n4월 한달 동안 바른 말을 사용하려 노력한 학생으로 추천받을 시 상점 부여하며, 많은 학생들이 추천한 학생들에게는 상품권을 수여합니다.\n- 2명 이상(본인 추천 가능)에게 추천 받은 학생 : 상점 2점\n- 가장 많은 학생들에게 추천 받은 학생 학년별 5명 : 상품권 1만원',
    },
  ];
  return dispatch(setSelectedTag(selectedTag, tableType, postsList));
};

export default function reducer(
  state = initalState,
  action: NoticeAction,
): NoticeState {
  switch (action.type) {
    case SET_SELECTED_TAG:
      return {
        ...state,
        selectedTag: action.payload.selectedTag,
        tableType: action.payload.tableType,
        tableItems: action.payload.tableItems,
      };
    default:
      return state;
  }
}
