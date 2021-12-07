import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';
import LikeWidgetComponent from './like-widget.component';

describe(`${LikeWidgetComponent.name}`, () => {
  let fixtute: ComponentFixture<LikeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LikeWidgetComponent],
      providers: [UniqueIdService],
      imports: [FontAwesomeModule],
    }).compileComponents();

    fixtute = TestBed.createComponent(LikeWidgetComponent);
  });

  it(`Should create component`, () => {
    const instance = fixtute.componentInstance;
    expect(instance).toBeTruthy();
  });
});
