import { useContext, useEffect, useState, useMemo } from 'react'
import { Store } from '../lib/storeContext'

export default function createReduxHook(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps
  })
) {
  return otherProps => {
    const store = useContext(Store)
    const [state, setState] = useState(store.getState())

    useEffect(() => {
      return store.subscribe(() => {
        setState(store.getState())
      })
    })

    const stateProps = useMemo(() => mapStateToProps(state, otherProps), [
      state,
      otherProps
    ])

    const dispatchProps = useMemo(
      () => mapDispatchToProps(store.dispatch, otherProps),
      [store, otherProps]
    )

    return useMemo(() => mergeProps(stateProps, dispatchProps), [
      stateProps,
      dispatchProps
    ])
  }
}
