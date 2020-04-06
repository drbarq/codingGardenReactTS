import Store from '../interfaces/Store';
import { createTypedHooks } from 'easy-peasy';

// Provide our model to the helper
const typedHooks = createTypedHooks<Store>();

// Export the typed hooks
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
