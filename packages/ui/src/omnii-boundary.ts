export type OmniiPresentationAction = 'view' | 'navigate' | 'prepare' | 'execute'

const LOCAL_ONLY: OmniiPresentationAction[] = ['view', 'navigate']

export function classifyPresentationAction(action: OmniiPresentationAction) {
  const routesToRuntime = !LOCAL_ONLY.includes(action)
  return {
    action,
    routesToRuntime,
    createsCanonicalState: false,
    requiresCanonicalAuthorityCheck: routesToRuntime,
    reason: routesToRuntime ? 'canonical-runtime-required' : 'presentation-only',
  }
}
