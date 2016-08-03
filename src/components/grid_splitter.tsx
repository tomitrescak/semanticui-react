import * as React from 'react'; $
import './grid_splitter.css';
import * as css from "classnames";

// function relativeResize1(lDiv: JQuery, rDiv: JQuery, marker: JQuery, evt: any) {
//   return function (e: MouseEvent) {
//     let minLeft = lDiv.position().left + 50;
//     let maxRight = rDiv.position().left + rDiv.width() - 50;
//     if (e.clientX > minLeft && e.clientX < maxRight) {
//       lDiv.css('left', 0);
//       lDiv.css('right', (((window.innerWidth - e.clientX) / window.innerWidth) * 100) + '%');
//       rDiv.css('left', ((e.clientX / window.innerWidth) * 100) + '%');
//       marker.css('left', ((e.clientX / window.innerWidth) * 100) + '%');

//       // notify clients on resizing event
//       evt.emit();
//     }
//   };
// }

function relativeResize(container: JQuery, lDiv: JQuery, rDiv: JQuery, marker: JQuery, evt: any) {
  return function (e: MouseEvent) {

    let left = lDiv.offset().left;

    let relativeWindow = container.width();
    
    let relativePosition = e.clientX - left;
    let minLeft = left + 150;
    let maxRight = window.innerWidth - 300;

    // console.log(left);
    // console.log(`${e.clientX} > ${minLeft} && ${e.clientX} < ${maxRight}`);

    if (e.clientX > minLeft && e.clientX < maxRight) {
      lDiv.css('width', ((relativePosition / relativeWindow) * 100) + '%');
      rDiv.css('width', (((relativeWindow - relativePosition) / relativeWindow) * 100) + '%');
      marker.css('left', ((relativePosition / relativeWindow) * 100) + '%');

      // notify clients on resizing event
      if (evt) {
        evt();
      }
    }
  };
}

function resizer(container: any, left: any, right: any, resizer: any, evt: any) {
  const hresize = relativeResize($(container), $(left), $(right), $(resizer), evt);

  window.addEventListener('mousemove', hresize, true);
  window.addEventListener('mouseup', function () {
    window.removeEventListener('mousemove', hresize, true);
  }, true);
  return false;
}


export interface IComponentProps {
  split?: 'horizontal' | 'vertical';
  children?: any;
  resized?: Function;
  classes?: string;
}

export interface IComponent extends IComponentProps { }

export const ExerciseView = ({ split, resized, children, classes }: IComponent) => {
  let container: HTMLElement;
  let left: HTMLElement;
  let right: HTMLElement;
  let resizeHandle: HTMLElement;

  return (
    <div ref={(node) => container = node} className={css("ui gridSplitter gsContainer", classes)}>
      <div ref={(node) => resizeHandle = node}
        className={'ui gridSplitter resizer h50'}
        onMouseDown={() => resizer(container, left, right, resizeHandle, resized)} />
      <div ref={(node) => left = node} className={"ui gridSplitter first " + (split ? split : '')}>
        {children[0]}
      </div>
      <div ref={(node) => right = node}  className={"ui gridSplitter second " + (split ? split : '')}>
        {children[1]}
      </div>
    </div>
  );
};

export default ExerciseView;
