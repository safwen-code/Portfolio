import {
  ABOUT_ME,
  PROJECT,
  SKILLS,
  CONTACT,
  COMPETENCE,
  ADD_CONTACT,
} from './types'
import axios from 'axios'
import { aboutmeData, projectData, skillData, compData } from './fakedata'
//competance traitement
export const telecharger = async () => {
  try {
    let res = await axios.get('/profile/file/')
    return res.data
  } catch (error) {
    console.log(error)
  }
}
export const aboutme = () => async (dispatch) => {
  try {
    let res = await axios.get('/profile/')
    return res.data
  } catch (error) {
    console.log(error)
  }
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
export const contact = (formData) => async (dispatch) => {
  try {
    //console.log(formData)
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    let res = await axios.post('/profile/sendmail', formData, config)
    return res.data
  } catch (error) {
    console.error(error.message)
  }
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
