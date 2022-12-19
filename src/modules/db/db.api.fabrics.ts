import axios from 'axios'
import { Ref } from 'vue'

import { useLoggerStore } from '@/stores/logger'
import { errorsUtils } from '@/modules/core/errors'

export function createDocRequests <T extends { _id: string }> (params: { endpointRef: Ref }) {
  const endpointRef = params.endpointRef

  function fetchAll () {
    return axios.get(endpointRef.value)
  }

  function fetchOne (_id: string) {
    return axios.get(`${endpointRef.value}/${_id}`)
  }

  function createOne (doc: T) {
    return axios.post(endpointRef.value, doc)
  }

  function updateOne (doc: T) {
    return axios.patch(`${endpointRef.value}/${doc._id}`, doc)
  }

  function removeOne (idOrEntity: string | T) {
    const _id = typeof idOrEntity === 'string'
      ? idOrEntity
      : idOrEntity._id

    return axios.delete(`${endpointRef.value}/${_id}`)
  }

  return {
    fetchAll,
    fetchOne,
    createOne,
    updateOne,
    removeOne,
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

  async function fetchOne (_id: string) {
    const requestName = 'request: fetchOne'
    const result = { doc: null, message: '' }

    loggerStore.sendNotice(requestName, moduleName)

    try {
      const { data } = await apiRequests.fetchOne(_id)

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

  async function createOne (doc: T) {
    const requestName = 'request: createOne'
    const result = { doc: null, message: '' }

    loggerStore.sendNotice([requestName, JSON.stringify(doc)], moduleName)

    try {
      const { data } = await apiRequests.createOne(doc)

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

  async function updateOne (doc: T) {
    const requestName = 'request: updateOne'
    const result = {
      doc: null,
      message: '',
    }

    loggerStore.sendNotice([requestName, JSON.stringify(doc)], moduleName)

    try {
      const { data } = await apiRequests.updateOne(doc)

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
    const _id = typeof docOrId === 'string' ? docOrId : docOrId._id

    loggerStore.sendNotice([requestName, _id], moduleName)

    try {
      const { data } = await apiRequests.removeOne(_id)

      result.message = data.message
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
  }
}
