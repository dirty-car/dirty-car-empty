export const getElementHeight = <T extends Element>(element: T | null, preparedStyles?: CSSStyleDeclaration ) => {
    if(!element) {
        return 0;
    }

    const styles = preparedStyles || window.getComputedStyle(element);
    
    return element.clientHeight + parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom']);
}