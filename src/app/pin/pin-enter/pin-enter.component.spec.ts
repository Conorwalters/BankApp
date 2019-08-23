import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { PinEnterComponent } from './pin-enter.component';
import { Store } from '@ngrx/store';
import { I18NTestModule } from 'src/app/i18n/i18n-testing-module';
import { initialAuthState, AuthLogic } from 'src/app/state/auth';
import { AppState } from 'src/app/state';
import { KeypadComponent } from 'src/app/keypad/keypad.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PinEnterComponent', () => {
    let component: PinEnterComponent;
    let fixture: ComponentFixture<PinEnterComponent>;
    let store: MockStore<AppState>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ PinEnterComponent, KeypadComponent ],
        imports: [ I18NTestModule, RouterTestingModule ],
        providers: [
          provideMockStore({ initialState: { auth: initialAuthState } })
        ]
      });
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PinEnterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

    it('should create', () => {
        expect(component).toBeTruthy();
      });
    it('should add digit to the current pin when a key is pressed on the keypad', () => {
        component.pin = 1;
        component.onKeyPressed(7);
        expect(component.pin).toEqual(17);
      });
})
