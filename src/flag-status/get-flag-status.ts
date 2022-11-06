import puppeteer from 'puppeteer';

const getFlagStatus = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://us.halfstaff.org/');

  const entriesSelector = '.entry';
  await page.waitForSelector(entriesSelector);

  return page.evaluate((params) => {
    const elementIsNotNull = (element: Element | null): element is Element =>
      element !== null;

    const isTwoElementsWithTextContent = (
      elements: Array<Element>,
    ): elements is [
      Element & { textContent: string },
      Element & { textContent: string },
    ] =>
      elements.length == 2 &&
      !!elements[0].textContent &&
      !!elements[1].textContent;

    return Array.from(document.querySelectorAll(params))
      .map((entryElement) => entryElement.querySelector('.heading'))
      .filter(elementIsNotNull)
      .map((headingElement) =>
        Array.from(headingElement.querySelectorAll('.date')),
      )
      .filter(isTwoElementsWithTextContent)
      .map((dateElements) => ({
        start: new Date(dateElements[0].textContent.replace('START: ', '')),
        end: new Date(dateElements[1].textContent.replace('END: ', '')),
      }));
  }, entriesSelector);
};

export default getFlagStatus;
