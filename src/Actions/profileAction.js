import {
  ABOUT_ME,
  PROJECT,
  SKILLS,
  CONTACT,
  COMPETENCE,
  ADD_CONTACT,
} from './types'
import { aboutmeData, projectData, skillData, compData } from './fakedata'
//competance traitement
export const aboutme = () => (dispatch) => {
  try {
    dispatch({
      type: ABOUT_ME,
      payload: aboutmeData,
    })
  } catch (error) {}
}
export const projects = () => (dispatch) => {
  dispatch({
    type: PROJECT,
    payload: projectData,
  })
}
export const skills = () => (dispatch) => {
  dispatch({
    type: SKILLS,
    payload: skillData,
  })
}
export const contact = () => (dispatch) => {
  dispatch({
    type: CONTACT,
    payload: 'contact',
  })
}

export const competanceAction = () => (dispatch) => {
  dispatch({
    type: COMPETENCE,
    payload: compData,
  })
}

export const AddContact = (formData) => (dispatch) => {
  console.log(formData)
  dispatch({
    type: ADD_CONTACT,
    payload: formData,
  })
}
