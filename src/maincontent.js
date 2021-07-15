import './maincontent.css';

export default function Content() {
    return (
        <div className="content" id="top">
            <ScrollToTop />
            <TypeEff />
            <Projects />
        </div>
    )
}

function TypeEff() {
    return (
        <div className="init-body">
            <h1>
                <a style={{fontSize: "2rem"}} href="#top" className="typewrite" data-period="2000" 
                   data-type='[ "Hello!", "I am Nabil Omi.", "I&apos;m a student at CUNY CCNY.",
                                "Nothing else to say, here&apos;s some fun facts!",
                                "Originally, oranges were a tangerine-pomelo hybrid, and were green.",
                                "A cow-bison hybrid is called a &apos;beefalo&apos;.",
                                "Armadillo shells are bulletproof.",
                                "Firefighters use wetting agents to make water wetter.",
                                "Dogs sniff good smells with their left nostril.",
                                "That&apos;s all I got." ]'>
                    <span className="wrap"></span>
                </a>
            </h1>
        </div>
    )
}

function Projects() {
    return (
        <div className="projects" id="projects">
            <h1 id="project-header">Projects</h1>
            <p id="proj-header-desc">Click on any title to see the GitHub repo!</p>

            <div className="project-li">

                <div className="project-item">
                    <h2 className="project-title">
                        <a href="https://github.com/rquit/colab_nn_tests" target="_blank" rel="noreferrer">Neural Network Experiments</a>
                    </h2>
                    <p className="project-desc">Studying Neural Networks such as CNN, RNN, LSTM. Click the title to see the notebooks!</p>
                    <img className="project-img" src="https://cdn.discordapp.com/attachments/803041781801025566/861433844992049172/unknown.png" alt="Convnet page" />
                </div>

                <div className="project-item">
                    <h2 className="project-title">
                        <a href="https://github.com/rquit/Chat-Bots/tree/main/Slack/NodeJS" target="_blank" rel="noreferrer">Slack Scheduling Bot</a>
                    </h2>
                    <p className="project-desc">Uses the Spurwing API to create appointments through Slack chat.</p>
                    <img className="project-img" src="https://raw.githubusercontent.com/rquit/Chat-Bot-Integrations/main/Slack/NodeJS/slackbot.gif" alt="GIF of the bot in action." />
                </div>

                <div className="project-item">
                    <h2 className="project-title">
                        <a href="https://github.com/rquit/Mable" target="_blank" rel="noreferrer">Multi-Purpose Discord Bot</a>
                    </h2>
                    <p className="project-desc">Features can be seen in GitHub Repository. No longer being used.</p>
                    <img className="project-img" src="https://cdn.discordapp.com/attachments/803041781801025566/836734086705578014/unknown.png" alt="Screenshot of the bot in use." />
                </div>

                <div className="project-item">
                    <h2 className="project-title">
                        <a href="https://github.com/rquit/HackUIowa" target="_blank" rel="noreferrer">UIowa Hackathon Submission</a>
                    </h2>
                    <p className="project-desc">Learned React in less than 24 hours for this submission. Hosted can be seen 
                                                <a href="https://goals.nabilto.com/" target="_blank" rel="noreferrer"> <u>here.</u> </a>
                                                Features routing, authentication, and a simple noSQL database thanks to Google Firebase. Made solo.</p>
                    <img className="project-img" src="https://cdn.discordapp.com/attachments/803041781801025566/861437450236723200/unknown.png" alt="Screenshot of the main page." />
                </div>

                <div className="project-item">
                    <h2 className="project-title">
                        <a href="https://github.com/rquit/single-page-portfolio" target="_blank" rel="noreferrer">Source Code to This Site</a>
                    </h2>
                    <p className="project-desc">Just in case you wanted to see it.</p>
                    <img className="project-img" src="https://cdn.discordapp.com/emojis/778880071950794783.gif?v=1" 
                         alt="This is an easter egg. If you are using a screen reader, what's up?"
                         style={{maxWidth: "40vh"}} />
                </div>

            </div>

        </div>
    )
}

function ScrollToTop() {
    return (
        <div className="scroll-top">
            <a href="#top">↑↑↑</a>
        </div>
    )
}

/*
    Not my code!
    Yoinked From: https://css-tricks.com/snippets/css/typewriter-effect/
*/
var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 150 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};