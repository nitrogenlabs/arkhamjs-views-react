/**
 * Copyright (c) 2018, Nitrogen Labs, Inc.
 * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
 */

import {ArkhamRouteConstants} from '../../constants/ArkhamRouteConstants';
import {FluxAction} from '../../Flux/Flux';
import {ArkhamRouteActions} from './ArkhamRouteActions';

describe('ArkhamRouteActions', () => {
  describe('#goBack', () => {
    it('should dispatch event to go back', async (): Promise<any> => {
      const action: FluxAction = await ArkhamRouteActions.goBack();
      expect(action.type).toBe(ArkhamRouteConstants.GO_BACK);
    });
  });

  describe('#goForward', () => {
    it('should dispatch event to go forward', async (): Promise<any> => {
      const action: FluxAction = await ArkhamRouteActions.goForward();
      expect(action.type).toBe(ArkhamRouteConstants.GO_FORWARD);
    });
  });

  describe('#goReplace', () => {
    it('should dispatch event to replace path', async (): Promise<any> => {
      const path: string = '/test';
      const params = {item: 'test'};
      const action: FluxAction = await ArkhamRouteActions.goReplace(path, params);
      expect(action.type).toBe(ArkhamRouteConstants.GO_REPLACE);
      expect(action.path).toBe(path);
      expect(action.params.item).toBe(params.item);
    });
  });

  describe('#goto', () => {
    it('should push path into history', async (): Promise<any> => {
      const path: string = '/test';
      const params = {item: 'test'};
      const action: FluxAction = await ArkhamRouteActions.goto(path, params);
      expect(action.type).toBe(ArkhamRouteConstants.GOTO);
      expect(action.path).toBe(path);
      expect(action.params.item).toBe(params.item);
    });
  });

  describe('#updateTitle', () => {
    it('should update browser title', async (): Promise<any> => {
      const name = 'Test';
      const {title} = await ArkhamRouteActions.updateTitle(name);
      expect(title).toBe(name);
    });
  });
});
