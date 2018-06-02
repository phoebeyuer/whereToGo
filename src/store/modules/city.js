import * as ActionTypes from '../../constants/ActionTypes'

const makeAction = type => ({ commit }, ...args) => commit(type, ...args)

const city = {
  namespaced: true,
  state: {
    test: 233
  },
  mutations: {
    [ActionTypes.TEST_ACTION] (state) {
      // 显示 Loading 界面
      state.test += 1
    },
  },
  actions: {
    // #region 测试 Action
    testAction: makeAction(ActionTypes.TEST_ACTION),
    // #endregion 测试 Action
  },
  getters: {
    getTestData: state => state.test
  }
}

export default city
