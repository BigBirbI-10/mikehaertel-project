export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* About This Site */}
        <div className="mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-8">
          <h3 className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-50">
            About This Site
          </h3>
          <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Built with <strong>Next.js 16</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong> using <strong>Claude Code</strong>.
            Contact form powered by <strong>Resend</strong>.
            Deployed on <strong>AWS</strong> (S3 + CloudFront + Route 53).
          </p>
          <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">
            Multi-cloud capable. Platform agnostic.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Projects */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-50">
              Projects
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a
                  href="https://farescout.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-6 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  FareScout.App
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/BigBirbI-10/hak5-pager-ble-scanner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-6 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  Hak5 BLE Scanner
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/BigBirbI-10/hak5-pager-wigle-uploader"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-6 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  Hak5 WiGLE Uploader
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-50">
              Connect
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a
                  href="https://github.com/BigBirbI-10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-6 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/michaelhaertel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-6 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-50">
              Location
            </h3>
            <p className="mt-6 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Austin, TX
            </p>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">
              Open to remote opportunities
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-zinc-200 dark:border-zinc-800 pt-8">
          <p className="text-xs leading-5 text-zinc-500 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} Michael Haertel. Built with Next.js and AI coding tools, deployed on AWS.
          </p>
        </div>
      </div>
    </footer>
  );
}
