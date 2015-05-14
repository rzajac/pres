/**
 * Add run button to code snippet
 *
 * @param {HTMLElement} dCode The code element
 */
function codeRunner(dCode)
{
  if ( ! (dCode && 'addRun' in dCode.dataset) ) return;

  var button, parent = dCode.parentNode;

  // Button already exists
  if (parent.querySelector('.runButton')) return;

  // Setup run button
  button = document.createElement('button');
  button.innerHTML = 'Run';
  button.className = 'runButton';

  button.onclick = function()
  {
    var code = dCode.textContent;

    // Run only JavaScript code
    if (dCode.dataset.addRun == 'js')
    {
      console.clear();
      eval(code);
    }
  };

  parent.appendChild(button);
}

/**
 * Log to console
 */
function clog()
{
  console.log.apply(console, arguments);
}

/**
 * Log to console
 */
function cdir()
{
  console.dir.apply(console, arguments);
}

/**
 * Get class name for object
 *
 * @param {object} o
 * @return {string}
 */
function className(o)
{
  var funcNameRegex = /function (.{1,})\(/;
  var results = (funcNameRegex).exec((o).constructor.toString());
  return (results && results.length > 1) ? results[1] : "";
}
