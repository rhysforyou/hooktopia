import { useContext, useEffect, useState } from 'react'
import { Store } from '../lib/storeContext'

export default function useStoreConnector(mapStateToProps, mapDispatchToProps) {
  const store = useContext(Store)
  const [state, setState] = useState(store.getState())

  useEffect(() => {
    return store.subscribe(() => {
      setState(store.getState())
    })
  })

  const stateProps = mapStateToProps(state)
  const dispatchProps = mapDispatchToProps(store.dispatch)

  return { ...stateProps, ...dispatchProps }
}
