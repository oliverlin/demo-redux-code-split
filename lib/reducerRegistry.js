export class ReducerRegistry {
  constructor() {
    this._emitChange = null
    this._reducers = {
      default: (state = null) => state
    }
  }

  getReducers() {
    return { ...this._reducers }
  }

  register(name, reducer) {
    if (this._reducers[name]) {
      return
    }
    const newReducers = { ...this._reducers, [name]: reducer }
    console.log(` current reducers: [${Object.keys(this._reducers)}]
upcoming reducers: [${Object.keys(newReducers)}]`)
    this._reducers = newReducers
    if (this._emitChange) {
      this._emitChange(this.getReducers())


    }
  }

  setChangeListener(listener) {
    this._emitChange = listener
  }
}

const reducerRegistry = new ReducerRegistry()
export default reducerRegistry
