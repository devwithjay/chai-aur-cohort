document.addEventListener('DOMContentLoaded', function () {
  const videoContainer = document.getElementById('video-container');
  const loader = document.getElementById('loader');
  const searchInput = document.getElementById('search-input');
  const pagination = document.getElementById('pagination');
  const prevPageBtn = document.getElementById('prev-page');
  const nextPageBtn = document.getElementById('next-page');
  const pageInfo = document.getElementById('page-info');

  let allVideos = [];
  let filteredVideos = [];
  let currentPage = 1;
  let totalPages = 1;

  function formatDuration(duration) {
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    const hours = parseInt(match[1] || 0);
    const minutes = parseInt(match[2] || 0);
    const seconds = parseInt(match[3] || 0);

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
  }

  function formatViewCount(count) {
    const num = parseInt(count);
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num;
  }

  function formatPublishedDate(date) {
    const published = new Date(date);
    const now = new Date();
    const diffTime = Math.abs(now - published);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays >= 365) {
      const years = Math.floor(diffDays / 365);
      return `${years} ${years === 1 ? 'year' : 'years'} ago`;
    } else if (diffDays >= 30) {
      const months = Math.floor(diffDays / 30);
      return `${months} ${months === 1 ? 'month' : 'months'} ago`;
    } else if (diffDays >= 7) {
      const weeks = Math.floor(diffDays / 7);
      return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
    } else if (diffDays > 0) {
      return `${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago`;
    } else {
      return 'Today';
    }
  }

  async function fetchVideos(page = 1) {
    loader.classList.remove('hidden');

    try {
      const response = await fetch(
        `https://api.freeapi.app/api/v1/public/youtube/videos?page=${page}`,
      );
      const data = await response.json();

      if (data.success && data.data && data.data.data) {
        const processedVideos = [];

        data.data.data.forEach(item => {
          if (item.items && item.items.snippet) {
            const video = {
              id: item.items.id,
              title: item.items.snippet.title,
              thumbnail:
                item.items.snippet.thumbnails?.high?.url ||
                item.items.snippet.thumbnails?.default?.url,
              channelTitle: item.items.snippet.channelTitle,
              publishedAt: item.items.snippet.publishedAt,
              viewCount: item.items.statistics?.viewCount || '0',
              duration: item.items.contentDetails?.duration || 'PT0S',
            };
            processedVideos.push(video);
          }
        });

        currentPage = data.data.page;
        totalPages = data.data.totalPages;
        updatePaginationUI();

        allVideos = processedVideos;
        displayVideos(processedVideos);
      }
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      loader.classList.add('hidden');
      pagination.classList.remove('hidden');
    }
  }

  function displayVideos(videos) {
    videoContainer.innerHTML = '';

    if (videos.length === 0) {
      videoContainer.innerHTML = `
        <div class="col-span-full text-center py-16 text-gray-400">
          No videos found matching your search.
        </div>
      `;

      return;
    }

    videos.forEach(video => {
      const videoCard = document.createElement('div');
      videoCard.className =
        'bg-[#1a1a1a] rounded-lg overflow-hidden cursor-pointer transform transition-transform hover:-translate-y-1 hover:shadow-lg';
      videoCard.onclick = () =>
        window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank');

      videoCard.innerHTML = `
        <div class="relative pb-[56.25%]">
          <img src="${video.thumbnail}" alt="${video.title}" class="absolute top-0 left-0 w-full h-full object-cover">
          <span class="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
            ${formatDuration(video.duration)}
          </span>
        </div>
        <div class="p-3">
          <h3 class="font-medium truncate-2-lines text-sm sm:text-base mb-1">${video.title}</h3>
          <p class="text-gray-400 text-xs sm:text-sm">${video.channelTitle}</p>
          <div class="text-gray-400 text-xs flex items-center mt-1">
            <span>${formatViewCount(video.viewCount)} views</span>
            <span class="mx-1">•</span>
            <span>${formatPublishedDate(video.publishedAt)}</span>
          </div>
        </div>
      `;

      videoContainer.appendChild(videoCard);
    });
  }

  function updatePaginationUI() {
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    prevPageBtn.disabled = currentPage <= 1;
    nextPageBtn.disabled = currentPage >= totalPages;
  }

  searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase().trim();

    if (searchTerm === '') {
      filteredVideos = allVideos;
    } else {
      filteredVideos = allVideos.filter(
        video =>
          video.title.toLowerCase().includes(searchTerm) ||
          video.channelTitle.toLowerCase().includes(searchTerm),
      );
    }

    displayVideos(filteredVideos);
  });

  prevPageBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      fetchVideos(currentPage - 1);
    }
  });

  nextPageBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
      fetchVideos(currentPage + 1);
    }
  });

  fetchVideos();
});
