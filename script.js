const mediaFiles = [
  "010E2CEE-B89B-425E-97F8-54A3A93FFC2D.JPG",
  "04BACCAC-3C8B-400A-9DF2-11A59E9BAE3C.JPG",
  "08D1344B-FFE1-4D8C-959F-CBDCD1BA1B8A.JPG",
  "0A305117-8324-4749-94F8-7262A962967C.JPG",
  "0B2A4273-BBAF-431F-8F1E-F8214F47EDA4.JPG",
  "0BEC77B7-F25E-4807-98B6-9F075D89BCEF.JPG",
  "0CF70F95-1A0E-4594-AA00-16BE850A692F.JPG",
  "0DA88838-31A5-4E30-B083-66FB84D79E39.JPG",
  "168050B2-6C04-4051-949B-E76455704CF2.JPG",
  "18DA72F9-4A29-4C7F-99F4-F0C29B1C5684.JPG",
  "1CAC9F1D-5789-4C8A-AE73-3DA0F79D8154.JPG",
  "20D46D70-3821-43E1-A886-33A6EBEB8B3A.JPG",
  "217FC1B6-91DA-44EE-AA7B-CE7B7CBC203C.JPG",
  "268F8450-0B94-43A6-A572-F30E6A331F10.JPG",
  "27FD54B0-B368-4034-BBFE-6DBB65495594.JPG",
  "30EF9277-A54E-451D-904E-230E15BCC188.JPG",
  "38072A8A-F0BB-4805-86B6-9E2FD1B235F1.JPG",
  "40D56ECE-03C3-4256-8E9D-9116378C26E2.JPG",
  "449AD672-604C-48FC-A09A-60B378218F6D.JPG",
  "461BC656-E5EB-4BC7-B647-2D6F994523DB.JPG",
  "492E5399-9705-4BB4-9D5E-60BA2E555E3E.JPG",
  "4BF0FEB6-4872-437B-9EA3-68B6205B2BA9.JPG",
  "57D38412-F03D-44A7-8A5F-BA29FFE61419.JPG",
  "67687137-4225-4C69-90CB-E9B90853AE12.JPG",
  "6A136F07-F3AB-43BF-90A0-837831E38B03.JPG",
  "6A5CB526-FD73-4682-A723-321211DA83F5.JPG",
  "6FFCA739-1C36-4F7E-B0BE-99E5CE727445.JPG",
  "72486196-695F-4082-A0DF-CB8D39FF04AB.JPG",
  "73E77724-EC33-4161-B7D3-EBF074C39C13.JPG",
  "741C518F-4BD4-4B05-B620-42AE12DD03D3.JPG",
  "7865A4A8-57B9-4F2C-BF3D-B58606D6D788.JPG",
  "7A7912FF-6E3A-4A63-8B6E-E95C37D7CBC6.JPG",
  "7B19CC39-15A8-4503-AE14-CD1B7B300C52.JPG",
  "7DC64CAF-9C18-4538-8E89-609FD924BA50.JPG",
  "7F27148F-1345-4429-B370-415CCA215635.JPG",
  "80BC19AF-D22A-41EE-AD75-67674BEF5BDB.JPG",
  "81D4E9DA-FA56-4811-A0F5-4C7131318CA0.JPG",
  "874F580E-1A30-45BF-8366-C4609872D5C0.JPG",
  "8CD53309-C4DD-4401-80D5-422D830614DE.JPG",
  "8D895724-3797-46B9-B9B9-758C1F79A880.JPG",
  "8EDE59F1-ABFF-4F5B-897C-7E24E4882E83.JPG",
  "938C3184-92A9-4C93-B617-FFA5F58926E1.JPG",
  "945ADE85-F19F-4AFF-93E2-72BFCD8A8B6B.JPG",
  "96E3108E-7379-4442-BEDE-1E64C6CCF290.JPG",
  "9A38F6FC-588F-4EB0-8192-CDADD9C8F524.JPG",
  "9F25CC3A-DF58-48AE-9268-87F39175726D.JPG",
  "9F89C860-8866-4236-85A9-44FAAB0B8499.JPG",
  "9FB9A6A8-ACF4-48C0-9867-95B32980B461.JPG",
  "A05C3EB7-45FC-4D74-81C5-2EAA3E67B0A4.JPG",
  "A203B86D-87C4-40F2-A5A1-59F91C699923.JPG",
  "A2E80E3A-8F54-4959-9EA7-CF1E18FABF15.JPG",
  "AA271D6B-2BA7-4D0D-9263-103BF88793A9.JPG",
  "AB218346-3952-4966-8821-21555E5C3D97.JPG",
  "ACB34A76-B59C-46EB-A889-F041948FD159.JPG",
  "ADF2664E-A493-4177-A5F3-07C4852E15C2.JPG",
  "AE2E63ED-3691-4866-89D6-BA385D008464.JPG",
  "B16D32ED-0FDA-45E2-BD45-43A54381B951.JPG",
  "B1E75A72-0B61-4383-9803-91A069D9AF98.JPG",
  "B2C36632-7658-4C29-AA5E-A68A94A7B455.JPG",
  "B5D37DEF-3D40-4EAD-A98A-9B7A68990C88.JPG",
  "B6905B6A-1C4C-43DE-9864-2E0DD52F7F71.JPG",
  "B9CE95FC-87DC-4F27-8041-EEDEAEACCB80.JPG",
  "C1FF0DF7-0B88-4C18-9FD0-DFBE836AB84D.JPG",
  "CB868E4D-0D50-4072-947A-B74741568653.JPG",
  "D5410838-B6E4-4522-99AD-F33BD6F55FEF.JPG",
  "D6098568-C261-4C57-B45A-847608D770A4.JPG",
  "DB4C0CF5-B5EB-4EC7-B561-DFEB7EECD3AE.JPG",
  "DFBDE9D8-AE0E-41E4-8C79-3EC256E1EA91.JPG",
  "E66CAA75-1768-43AB-B9D7-DB1575008BD1.JPG",
  "E8EC0AA9-E4A7-4E16-9BF2-A58C2D0577C1.JPG",
  "EB82D0CA-0624-4D5A-B7B7-34C3C925A729.JPG",
  "EC99F46F-A9E7-4954-9BDF-47A92109693F.JPG",
  "ECAFB12D-068E-4EDB-8C2C-1DD056455E73.PNG",
  "F248D0B6-94D6-445D-98AE-681CBDD582DD.JPG",
  "F4BDAD54-A661-4574-ACF6-93F8A6AB737F.JPG",
  "F687A401-DBA4-4D58-95C3-9FC4E21125EF.JPG",
  "FA898352-11B1-4BFC-9862-EEFC8FB11B9E.JPG",
  "FABE6AFF-0E19-48E9-8730-B9DF82563E41.JPG"
];

const floating = document.getElementById("floating");
const lightbox = document.getElementById("lightbox");
const lightboxContent = document.getElementById("lightboxContent");
const lightboxClose = document.getElementById("lightboxClose");

const centerSafeRadius = 200;

const shuffle = (arr) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const pendingLoads = [];
const MAX_LOAD_BATCH = 6;

const createMediaItem = (file, index, layout, sizePx) => {
  const item = document.createElement("div");
  item.className = "media-item";
  item.dataset.file = file;

  const element = document.createElement("img");
  element.dataset.src = file;
  element.loading = "lazy";
  element.decoding = "async";
  element.fetchPriority = "low";

  item.appendChild(element);

  const size = `${sizePx}px`;
  const { left, top, driftX, driftY } = layout;
  const scale = 0.7 + Math.random() * 0.6;
  const rotate = (Math.random() * 20 - 10).toFixed(2) + "deg";
  const duration = (18 + Math.random() * 14).toFixed(2) + "s";
  const delay = (-Math.random() * 10).toFixed(2) + "s";

  item.style.left = `${left}px`;
  item.style.top = `${top}px`;
  item.style.setProperty("--size", size);
  item.style.setProperty("--scale", scale.toFixed(2));
  item.style.setProperty("--rotate", rotate);
  item.style.setProperty("--x", `${driftX}px`);
  item.style.setProperty("--y", `${driftY}px`);
  item.style.setProperty("--duration", duration);
  item.style.setProperty("--delay", delay);
  item.style.setProperty("--pop-delay", `${(index * 0.02).toFixed(2)}s`);

  item.addEventListener("click", () => openLightbox(file));

  const markReady = () => item.classList.add("is-ready");
  if (element.complete) {
    markReady();
  } else {
    element.addEventListener("load", markReady, { once: true });
    element.addEventListener("error", markReady, { once: true });
  }

  pendingLoads.push(element);
  return item;
};

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

const layoutPositions = (count, sizeList) => {
  const margin = 12;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const aspect = width / height;
  const cols = Math.max(4, Math.ceil(Math.sqrt(count * aspect)));
  const rows = Math.ceil(count / cols);
  const cellW = width / cols;
  const cellH = height / rows;
  const jitter = Math.min(cellW, cellH) * 0.22;

  const centerX = width / 2;
  const centerY = height / 2;
  const positions = [];

  for (let i = 0; i < count; i += 1) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const sizePx = sizeList[i];
    const maxLeft = Math.max(margin, width - sizePx - margin);
    const maxTop = Math.max(margin, height - sizePx - margin);

    const baseX = col * cellW + cellW / 2 - sizePx / 2;
    const baseY = row * cellH + cellH / 2 - sizePx / 2;
    let left = baseX + (Math.random() * jitter - jitter / 2);
    let top = baseY + (Math.random() * jitter - jitter / 2);

    const dx = left + sizePx / 2 - centerX;
    const dy = top + sizePx / 2 - centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < centerSafeRadius) {
      const push = centerSafeRadius - distance + sizePx * 0.15;
      const normX = dx === 0 ? 1 : dx / distance;
      const normY = dy === 0 ? 0 : dy / distance;
      left += normX * push;
      top += normY * push;
    }

    left = clamp(left, margin, maxLeft);
    top = clamp(top, margin, maxTop);

    const maxDriftX = Math.min(20, Math.min(left - margin, maxLeft - left));
    const maxDriftY = Math.min(20, Math.min(top - margin, maxTop - top));
    const driftX = (Math.random() * (maxDriftX * 2) - maxDriftX) || 0;
    const driftY = (Math.random() * (maxDriftY * 2) - maxDriftY) || 0;

    positions.push({ left, top, driftX, driftY });
  }

  return positions;
};

const openLightbox = (file) => {
  lightboxContent.innerHTML = "";
  const element = document.createElement("img");
  element.src = file;
  lightboxContent.appendChild(element);
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
};

const closeLightbox = () => {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxContent.innerHTML = "";
};

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

lightboxClose.addEventListener("click", closeLightbox);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});

const startLoadingBatches = () => {
  const loadNext = () => {
    const batch = pendingLoads.splice(0, MAX_LOAD_BATCH);
    batch.forEach((img) => {
      if (!img.src) img.src = img.dataset.src;
    });
    if (pendingLoads.length > 0) {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(loadNext, { timeout: 150 });
      } else {
        setTimeout(loadNext, 80);
      }
    }
  };
  loadNext();
};

const buildGallery = () => {
  floating.innerHTML = "";
  pendingLoads.length = 0;
  const ordered = shuffle(mediaFiles);
  const width = window.innerWidth;
  const baseMin = width < 420 ? 52 : width < 640 ? 58 : 70;
  const baseMax = width < 420 ? 95 : width < 640 ? 120 : 180;
  const sizeList = ordered.map(() => Math.round(baseMin + Math.random() * (baseMax - baseMin)));
  const positions = layoutPositions(ordered.length, sizeList);
  const fragment = document.createDocumentFragment();

  ordered.forEach((file, index) => {
    fragment.appendChild(createMediaItem(file, index, positions[index], sizeList[index]));
  });
  floating.appendChild(fragment);
  startLoadingBatches();
};

const pad = (value) => String(value).padStart(2, "0");

const calcElapsed = (startDate, now) => {
  if (now < startDate) return null;

  let years = now.getFullYear() - startDate.getFullYear();
  const tempYear = new Date(startDate);
  tempYear.setFullYear(startDate.getFullYear() + years);
  if (tempYear > now) {
    years -= 1;
    tempYear.setFullYear(startDate.getFullYear() + years);
  }

  let months = now.getMonth() - tempYear.getMonth();
  if (months < 0) months += 12;
  const tempMonth = new Date(tempYear);
  tempMonth.setMonth(tempYear.getMonth() + months);
  if (tempMonth > now) {
    months -= 1;
    tempMonth.setMonth(tempYear.getMonth() + months);
  }

  let remaining = now - tempMonth;
  const days = Math.floor(remaining / 86400000);
  remaining -= days * 86400000;
  const hours = Math.floor(remaining / 3600000);
  remaining -= hours * 3600000;
  const minutes = Math.floor(remaining / 60000);
  const seconds = Math.floor((remaining - minutes * 60000) / 1000);

  return { years, months, days, hours, minutes, seconds };
};

const updateCounter = () => {
  const start = new Date(2022, 11, 27, 0, 0, 0);
  const now = new Date();
  const elapsed = calcElapsed(start, now);

  if (!elapsed) return;

  document.getElementById("years").textContent = elapsed.years;
  document.getElementById("months").textContent = elapsed.months;
  document.getElementById("days").textContent = elapsed.days;
  document.getElementById("hours").textContent = pad(elapsed.hours);
  document.getElementById("minutes").textContent = pad(elapsed.minutes);
  document.getElementById("seconds").textContent = pad(elapsed.seconds);
};

buildGallery();
updateCounter();
setInterval(updateCounter, 1000);

const stage = document.querySelector(".stage");
stage.classList.add("show-gallery");

let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(buildGallery, 120);
});
