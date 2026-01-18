'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if response is JSON before parsing
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Server returned an invalid response. Please try again later.');
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name and Email */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-50">
            Name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="name"
              id="name"
              required
              maxLength={100}
              value={formData.name}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 dark:text-zinc-50 shadow-sm ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 dark:focus:ring-zinc-400 sm:text-sm sm:leading-6 bg-white dark:bg-zinc-900"
              placeholder="Your name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-50">
            Email
          </label>
          <div className="mt-2">
            <input
              type="email"
              name="email"
              id="email"
              required
              maxLength={100}
              value={formData.email}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 dark:text-zinc-50 shadow-sm ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 dark:focus:ring-zinc-400 sm:text-sm sm:leading-6 bg-white dark:bg-zinc-900"
              placeholder="you@example.com"
            />
          </div>
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-50">
          Subject
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="subject"
            id="subject"
            required
            maxLength={200}
            value={formData.subject}
            onChange={handleChange}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 dark:text-zinc-50 shadow-sm ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 dark:focus:ring-zinc-400 sm:text-sm sm:leading-6 bg-white dark:bg-zinc-900"
            placeholder="What's this about?"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-50">
          Message
        </label>
        <div className="mt-2">
          <textarea
            name="message"
            id="message"
            required
            maxLength={5000}
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 dark:text-zinc-50 shadow-sm ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 dark:focus:ring-zinc-400 sm:text-sm sm:leading-6 bg-white dark:bg-zinc-900"
            placeholder="Tell me about your project or inquiry..."
          />
        </div>
      </div>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="rounded-md bg-green-50 dark:bg-green-900/20 p-4">
          <p className="text-sm text-green-800 dark:text-green-200">
            ✓ Message sent successfully! I'll get back to you within 24-48 hours.
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className="rounded-md bg-red-50 dark:bg-red-900/20 p-4">
          <p className="text-sm text-red-800 dark:text-red-200">
            ✗ {errorMessage}
          </p>
        </div>
      )}

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full rounded-md bg-zinc-900 dark:bg-zinc-50 px-3.5 py-2.5 text-center text-sm font-semibold text-white dark:text-zinc-900 shadow-sm hover:bg-zinc-700 dark:hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 dark:focus-visible:outline-zinc-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      <p className="text-xs text-zinc-500 dark:text-zinc-500 text-center">
        Protected by rate limiting and spam detection. Your email will only be used to respond to your inquiry.
      </p>
    </form>
  );
}
