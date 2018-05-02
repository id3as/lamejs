const LAME_MAXALBUMART = (128 * 1024);
const LAME_MAXMP3BUFFER = (16384 + LAME_MAXALBUMART);

module.exports = {
  LAME_MAXALBUMART: LAME_MAXALBUMART,

  /**
   * maximum size of mp3buffer needed if you encode at most 1152 samples for
   * each call to lame_encode_buffer. see lame_encode_buffer() below
   * (LAME_MAXMP3BUFFER is now obsolete)
   */
  LAME_MAXMP3BUFFER: LAME_MAXMP3BUFFER
};
