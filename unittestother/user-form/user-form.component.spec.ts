import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form.component';
import { ReversePipe } from '../reverse.pipe';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserFormComponent, ReversePipe],
      imports: [FormsModule], // Import FormsModule for ngModel
    });
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reverse text using the ReversePipe', () => {
    component.text = 'hello';
    fixture.detectChanges();
    const reversedText = fixture.nativeElement.querySelector('p').textContent;
    expect(reversedText).toContain('Reversed Text: olleh');
  });
});
