/**
 * Copyright (c) 2018, Nitrogen Labs, Inc.
 * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
 */

import {Flux, FluxAction} from 'arkhamjs';
import {createBrowserHistory} from 'history';
import {ArkhamRouteConstants} from '../../constants/ArkhamRouteConstants';

/**
 * ArkhaRouteActions
 */
export class ArkhamRouteActions {
  static goBack(): Promise<FluxAction> {
    const history = createBrowserHistory();
    history.goBack();
    return Flux.dispatch({type: ArkhamRouteConstants.GO_BACK, history});
  }

  static goForward(): Promise<FluxAction> {
    const history = createBrowserHistory();
    history.goForward();
    return Flux.dispatch({type: ArkhamRouteConstants.GO_FORWARD, history});
  }

  static goReplace(path: string, params?): Promise<FluxAction> {
    const history = createBrowserHistory();
    history.replace(path, params);
    return Flux.dispatch({type: ArkhamRouteConstants.GO_REPLACE, history, path, params});
  }

  static goto(path: string, params?): Promise<FluxAction> {
    const history = createBrowserHistory();
    history.push(path, params);
    return Flux.dispatch({type: ArkhamRouteConstants.GOTO, history, path, params});
  }

  static updateTitle(title: string): Promise<FluxAction> {
    return Flux.dispatch({type: ArkhamRouteConstants.UPDATE_TITLE, history, title});
  }
}
