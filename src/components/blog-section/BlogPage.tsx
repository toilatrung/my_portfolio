import { useState } from 'react';
import Modal from 'react-modal';
import { blogPosts } from '../../data/blogData';

Modal.setAppElement('#root');

const BlogPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pdfSrc, setPdfSrc] = useState<string | null>(null);

  const openModal = (src: string) => {
    setPdfSrc(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setPdfSrc(null);
  };

  return (
    <section className="px-4 max-w-[1200px] mx-auto">
      <h2 className="text-6xl text-yellow mb-8">My Blog</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="cursor-pointer"
            onClick={() => openModal(post.pdfSrc)}
          >
            <img
              src={post.thumbnailSrc}
              alt={`Blog thumbnail ${post.id}`}
              className="w-full h-64 object-cover rounded shadow"
            />
          </div>
        ))}
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="PDF Viewer"
        className="w-[95%] md:w-[90%] lg:w-[80%] max-w-7xl mx-auto my-8 bg-white p-4 border-4 border-black shadow-pixel outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center overflow-y-auto p-4"
      >
        {pdfSrc && (
          <iframe
            src={pdfSrc}
            className="w-full h-[90vh] border-2 border-black"
            frameBorder="0"
            title="PDF Viewer"
          ></iframe>
        )}

        <div className="text-right mt-4 flex-shrink-0">
          <button
            onClick={closeModal}
            className="px-6 py-2 font-bold text-black transition-all duration-150 border-4 border-black bg-orange shadow-pixel hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            Đóng
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default BlogPage;
