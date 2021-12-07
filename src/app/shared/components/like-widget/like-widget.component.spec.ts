import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';
import LikeWidgetComponent from './like-widget.component';

describe(`${LikeWidgetComponent.name}`, () => {
  let fixture: ComponentFixture<LikeWidgetComponent>;
  let component: LikeWidgetComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LikeWidgetComponent],
      providers: [UniqueIdService],
      imports: [FontAwesomeModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  it(`#${LikeWidgetComponent.name} should create component`, () => {
    expect(component).toBeTruthy();
  });

  it(`#${LikeWidgetComponent.prototype.ngOnInit.name}
    should auto-generate Id during ngOnInit when (@Input id) is not assigned`, () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it(`#${LikeWidgetComponent.prototype.ngOnInit.name}
    should NOT auto-generate Id during ngOnInit when (@Input id) is assigned`, () => {
    const someId = 'some-id';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  it(`#${LikeWidgetComponent.prototype.like.name}
    should trigger (@Output liked) when called`, () => {
    spyOn(component.liked, 'emit');
    fixture.detectChanges();
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  });
});
