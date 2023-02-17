import axios from 'axios'
import { Ref } from 'vue'

import { useLoggerStore } from '@/stores/logger'
import { errorsUtils } from '@/modules/core/errors'

export function createDocRequests <T extends { _id: string }> (params: { endpointRef: Ref }) {
  const endpointRef = params.endpointRef

  function fetchAll () {
    return axios.get(endpointRef.value)
  }

  function fetchOne (id: string) {
    return axios.get(`${endpointRef.value}/${id}`)
  }

  function createOne (dto: T) {
    return axios.post(endpointRef.value, dto)
  }

  function updateOne (dto: T) {
    return axios.patch(`${endpointRef.value}/${dto._id}`, dto)
  }

  function removeOne (idOrEntity: string | T) {
    const id = typeof idOrEntity === 'string'
      ? idOrEntity
      : idOrEntity._id

    return axios.delete(`${endpointRef.value}/${id}`)
  }

  function findByMarkers (markers: string[]) {
    return axios.post(`${endpointRef.value}/findByMarkers`, { markers })
  }

  function findByText (text: string) {
    return axios.get(`${endpointRef.value}/findByText/${text}`)
  }

  return {
    fetchAll,
    fetchOne,
    createOne,
    updateOne,
    removeOne,
    findByMarkers,
    findByText,
  }
}

export function createDocService <T extends { _id: string }> ({ moduleName, apiRequests }: { moduleName: string, apiRequests: any }) {
  const loggerStore = useLoggerStore()

  async function fetchAll () {
    const requestName = 'request: fetchAll'
    const result = { docs: [], message: '', count: 0 }

    loggerStore.sendNotice(requestName, moduleName)

    try {
      const { data } = await apiRequests.fetchAll()

      result.docs = data.result
      result.message = data.message
      result.count = data.count
    } catch (error) {
      const { message } = errorsUtils.handleError(error)

      result.message = message
    } finally {
      loggerStore.sendResponse([
        requestName,
        `message: ${result.message}`,
        `count: ${result.count}`,
      ], moduleName)
    }

    return result
  }

  async function fetchOne (id: string) {
    const requestName = 'request: fetchOne'
    const result = { doc: null, message: '' }

    loggerStore.sendNotice(requestName, moduleName)

    try {
      const { data } = await apiRequests.fetchOne(id)

      result.doc = data.result
      result.message = data.message
    } catch (error) {
      const { message } = errorsUtils.handleError(error)

      result.message = message
    } finally {
      loggerStore.sendResponse([requestName, `message: ${result.message}`], moduleName)
    }

    return result
  }

  async function createOne (dto: T) {
    const requestName = 'request: createOne'
    const result = { doc: null, message: '' }

    loggerStore.sendNotice([requestName, JSON.stringify(dto)], moduleName)

    try {
      const { data } = await apiRequests.createOne(dto)

      result.doc = data.result
      result.message = data.message
    } catch (error) {
      const { message } = errorsUtils.handleError(error)

      result.message = message
    } finally {
      loggerStore.sendResponse([requestName, `message: ${result.message}`], moduleName)
    }

    return result
  }

  async function updateOne (dto: T) {
    const requestName = 'request: updateOne'
    const result = {
      doc: null,
      message: '',
    }

    loggerStore.sendNotice([requestName, JSON.stringify(dto)], moduleName)

    try {
      const { data } = await apiRequests.updateOne(dto)

      result.doc = data.result
      result.message = data.message
    } catch (error) {
      const { message } = errorsUtils.handleError(error)

      result.message = message
    } finally {
      loggerStore.sendResponse([requestName, `message: ${result.message}`], moduleName)
    }

    return result
  }

  async function removeOne (docOrId: T | string) {
    const requestName = 'request: removeOne'
    const result = { message: '' }
    const id = typeof docOrId === 'string' ? docOrId : docOrId._id

    loggerStore.sendNotice([requestName, id], moduleName)

    try {
      const { data } = await apiRequests.removeOne(id)

      result.message = data.message
    } catch (error) {
      const { message } = errorsUtils.handleError(error)

      result.message = message
    } finally {
      loggerStore.sendResponse([requestName, `message: ${result.message}`], moduleName)
    }

    return result
  }

  async function findByMarkers (markers: string[]) {
    const requestName = 'request: findByMarker'
    const result = { docs: [], message: '', count: 0 }

    loggerStore.sendNotice([requestName], moduleName)

    try {
      const { data } = await apiRequests.findByMarkers(markers)

      result.docs = data.result
      result.message = data.message
      result.count = data.count
    } catch (error) {
      const { message } = errorsUtils.handleError(error)

      result.message = message
    } finally {
      loggerStore.sendResponse([requestName, `message: ${result.message}`], moduleName)
    }

    return result
  }

  async function findByText (text: string) {
    const requestName = 'request: findByText'
    const result = { docs: [], message: '', count: 0 }

    loggerStore.sendNotice([requestName], moduleName)

    try {
      const { data } = await apiRequests.findByText(text)

      result.docs = data.result
      result.message = data.message
      result.count = data.count
    } catch (error) {
      const { message } = errorsUtils.handleError(error)

      result.message = message
    } finally {
      loggerStore.sendResponse([requestName, `message: ${result.message}`], moduleName)
    }

    return result
  }

  return {
    fetchAll,
    fetchOne,
    createOne,
    updateOne,
    removeOne,
    findByMarkers,
    findByText,
  }
}
