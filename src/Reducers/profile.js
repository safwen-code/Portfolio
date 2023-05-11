//import action from types
// create initiale state
//create default function redux for manange state

import {
  ABOUT_ME,
  PROJECT,
  SKILLS,
  CONTACT,
  COMPETENCE,
  ADD_CONTACT,
} from '../Actions/types'

const inistialState = {
  aboutmeState: null,
  projectState: [],
  SkillState: [],
  CompState: [],
  contact: null,
  loading: true,
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = inistialState, action) {
  const { type, payload } = action
  switch (type) {
    case ABOUT_ME:
      return {
        ...state,
        aboutmeState: payload,
        loading: false,
      }
    case PROJECT:
      return {
        ...state,
        projectState: payload,
        loading: false,
      }
    case SKILLS:
      return {
        ...state,
        SkillState: payload,
        loading: false,
      }
    case CONTACT:
      return {
        ...state,
        ContactState: payload,
        loading: false,
      }
    case COMPETENCE:
      return {
        ...state,
        CompState: payload,
        loading: false,
      }
    case ADD_CONTACT:
      return {
        ...state,
        contact: payload,
        loading: false,
      }

    default:
      return state
  }
}
